let WebhookClient;
try {
    ({ WebhookClient } = require('discord.js'));
} catch (exception) {
    console.log("discord.js not found, continuing without");
}

function timestamp() {
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let stringHour = hour > 9? hour: `0${hour}`;
    let stringMinute = minute > 9? minute: `0${minute}`;
    return `[${stringHour}:${stringMinute}]`;
}

/**
 * Wrap Console Functions
 * @param {string} [appName] Identifer to use in the logs
 * @param {Object} [webhookAuth] Authorization for the webhook
 * @param {string} webhookAuth.id Webhook ID
 * @param {string} webhookAuth.token Webhook Token
 * @return {void} `void`
 */
function DiscordLogger(appName, webhookAuth){
    let webhook = undefined;
    if (WebhookClient) webhook = webhookAuth? new WebhookClient(webhookAuth.id, webhookAuth.token): undefined;

    let builtins = {
        log: console.log,
        warn: console.warn, 
        error: console.error
    }

    for (let printFunction in builtins) {
        console[printFunction] = function() {
            let prefix = timestamp() + (appName? `[${appName}]`: '') + `[${printFunction.toUpperCase()}]`;
            builtins[printFunction].apply(console, [prefix, ...arguments]);
            if (webhook) {
                let message = [...arguments].reduce((accumulator, current) => {
                    return accumulator + current.toString() + "      ";
                }, "").trim();

                webhook.send(`\`${prefix} ${message}\``);
            }
        }
    }
}

module.exports = DiscordLogger;
