# Discord Logger

## What is it?
An in-place wrapper for console.log, console.warn, and console.error that sends all the logs to a Discord Webhook if specified as well as basic log formatting.

## Should I use it?
This package is mainly for personal use, I don't really intend for others to use it but you can if you want.

## How do I use it?

```
npm install --save @julianwebb/discord-logger
```

```js
require('discord-logger')( "appName", { id: "webhookID", token: "webhookToken" });
console.log("Wrapped log()") // returns: "[HH:mm][appName][LOG] Wrapped log()"
console.warn("Wrapped warn()") // returns: "[HH:mm][appName][WARN] Wrapped warn()"
console.error("Wrapped error()") // returns: "[HH:mm][appName][ERROR] Wrapped error()"
```

| Parameter | Type | Optional | Description |
| --- | --- | --- | --- |
| `appName` | string | **true** | Identifer to use in the logs |
| `webhookAuth` | Object | **true** | Authorization for the webhook |
| `webhookAuth.id` | string | **false** | Webhook ID. Required if using webhook |
| `webhookAuth.token` | string | **false** | Webhook Token. Required if using webhook | 

## How do I find the Webhook Auth in Discord?

After [creating a webhook](https://support.discord.com/hc/en-us/articles/228383668-Intro-to-Webhooks), copy the Webhook URL, it should look something like this:   
`https://discord.com/api/webhooks/{numeric_string}/{alphanumeric_string}`   
The **numeric_string** is the Webhook ID and the **alphanumeric_string** is the Webhook Token. Keep both of these secret and safe as knowing them allows anyone to post to that channel and edit the webhook.