# How to use WaliProvider with Builderbot

## Quick start

```bash
pnpm install @builderbot-plugins/wali@latest @builderbot/bot@latest
```

You must have `@builderbot/bot` version 1.1.5 or higher.

## Chatbot

```typescript
import { WaliProvider as Provider } from '@builderbot-plugins/wali'

const adapterProvider = createProvider(Provider, {
    token: `WALI_TOKEN`,
    deviceId: `WALI_DEVICE_ID`,
    api: 'https://wa-api.builderbot.app'
}) 
```

## Wali Platform

First of all, you need to register at [BuilderBot Console](https://console.builderbot.app/). Sign up and choose your preferred plan, it's completely free for the first 7 days.

Then, you need to log in with your WhatsApp by scanning the QR code generated. Scan it with your WhatsApp application.

### How do I get the WALI_TOKEN?

You need to go to the following URL and get your API key: [API Keys](https://console.builderbot.app/developers/apikeys)

![WALI_TOKEN](https://i.imgur.com/e7IGao1.png)

### How do I get the WALI_DEVICE_ID?

Access your dashboard and go to the WhatsApp numbers section to find the linked devices. In the details, you will find the ID as highlighted in the image.

![WALI_DEVICE_ID](https://i.imgur.com/74rtp9G.png)

### How to add a webhook?

Now, the final step is to indicate the webhook URL, for this you must have your chatbot deployed or running on a server and you can see in the logs a URL like the following

```
http://localhost:3008/webhook
```

You cannot use `localhost` as it is a reference. If you have your bot deployed on Railway, the URL would be something similar to

```
https://primary-production-e322.up.railway.app/webhook
```

![Webhook URL](https://i.imgur.com/uk74xJe.png)
![Webhook URL](https://i.imgur.com/d8tS1pw.png)
![Webhook URL](https://i.imgur.com/GMlPbar.png)