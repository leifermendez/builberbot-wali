import { EventEmitterClass, utils } from "@builderbot/bot";
import { ProviderEventTypes } from "@builderbot/bot/dist/types";

export type WaliMessage = {
    event: string
    data: {
        type: 'image' | 'text' | 'video' | 'audio' | 'document' | 'location'
        toNumber: string
        from: string
        fromNumber: string
        body?: string
        timestamp: number
        chat: {
            type: string,
            owner: { agent?: string },
            [key: string]: any
        }
        location?: {
            latitude: number,
            longitude: number
            name: string
            address: string
        }
        meta: {
            notifyName: string
        }
    }
}

export class WaliEvents extends EventEmitterClass<ProviderEventTypes> {

    /**
     * Función que maneja el evento de mensaje entrante de Wali.
     * @param payload - El mensaje entrante de Wali.
     */
    public eventInMsg = (payload: WaliMessage) => {

        if (payload.event !== 'message:in:new') return
        if (payload.data.chat.type !== 'chat') return
        if (payload.data.from.includes('g.us') || !payload.data) return
   
        const sendObj = {
            ...payload,
            timestamp: payload.data?.timestamp ?? 0,
            body: payload.data?.body || '',
            from: payload.data.fromNumber,
            name: payload.data.meta.notifyName,
            host: {
                phone: payload.data.toNumber
            },
        }

        if(payload.data.chat.owner.agent){
            console.log(``)
            console.log(`[🧑]: ${sendObj.from}`)
            console.log(`[🧑]: Conversation assigned to agent only answer human`)
            console.log(`[🧑]: If you want the bot to answer you must unassign the conversation.`)
            return
        }

        if (['image', 'video'].includes(payload.data.type)) sendObj.body = utils.generateRefProvider('_event_media_')
        if (payload.data.type === 'document') sendObj.body = utils.generateRefProvider('_event_document_')
        if (payload.data.type === 'audio') sendObj.body = utils.generateRefProvider('_event_voice_note_')
        if (payload.data.type === 'location') sendObj.body = utils.generateRefProvider('_event_location_')
        this.emit('message', sendObj)
    }

}
