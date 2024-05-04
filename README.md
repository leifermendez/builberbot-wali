# How tu use WaliProvider with Builderbot

## Quick start


```bash
pnpm install @builderbot-plugins/wali@1.0.1 @builderbot/bot@dev
```
You must have `@builderbot/bot` version 1.1.5 or higher

## Chatbot

```ts
import { WaliProvider as Provider } from '@builderbot-plugins/wali'

const adapterProvider = createProvider(Provider, {
    token: `WALI_TOKEN`,
    deviceId: `WALI_DEVICE_ID`,
    api: 'https://wa-api.builderbot.app'
}) 
```

## Wali Platform
Primero de todo debes registrate https://console.builderbot.app/
Te registras y elijes el plane de tu preferencia es totalmente gratis cualquier plan
los pimeros 7 días.

Luego debes de iniciar sesion con tu whatsapp escaneando el codigo qr generado,
debes de escanearlo con tu aplicaciond de whatsapp.

### ¿How I get the WALI_TOKEN?
Debes ingresar en la siguiente URl y obtener tu clave de API

https://console.builderbot.app/developers/apikeys

![](https://i.imgur.com/e7IGao1.png)

### ¿How I get the WALI_DEVICE_ID?

Ingresas a tu panel y en la seccion de numeros de whatsapp encontras los dispositivos vinculados en lo detalles encontraras el id como lo resalta la imagen.

![](https://i.imgur.com/74rtp9G.png)

### ¿How add webhook?

Ahora solo falta un paso debemos de indicar cual va ser la URL del webhook, para esto deberas tener tu chatbot desplegado o en ejecuccion en un servidor y podras
ver en los registro un url como la siguiente

```
http://localhost:3008/webhook
```
NO puedes usar `localhost` es una referencia, en el caso de tener
tu bot desplegado en railway la url seria algo similar a esta 

```
https://primary-production-e322.up.railway.app/webhook
```

![](https://i.imgur.com/uk74xJe.png)
![](https://i.imgur.com/d8tS1pw.png)
![](https://i.imgur.com/GMlPbar.png)

