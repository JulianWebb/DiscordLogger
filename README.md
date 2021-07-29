# Discord Logger

## What is it?
An in-place wrapper for console.log, console.warn, and console.error that sends all the logs to a Discord Webhook if specified as well as basic log formatting. Has no dependencies.

## Should I use it?
This package is mainly for personal use, I don't really intend for others to use it but you can if you want.

## How do I use it?

```
npm install --save @julianwebb/discord-logger
```

```js
require('discord-logger')( "appName", "webhookURL");
console.log("Wrapped log()") // returns: "[HH:mm][appName][LOG] Wrapped log()"
console.warn("Wrapped warn()") // returns: "[HH:mm][appName][WARN] Wrapped warn()"
console.error("Wrapped error()") // returns: "[HH:mm][appName][ERROR] Wrapped error()"
```

| Parameter | Type | Optional | Description |
| --- | --- | --- | --- |
| `appName` | string | **true** | Identifer to use in the logs |
| `webhookURL` | string | **true** | Webhook URL, required if you want to use a webhook |