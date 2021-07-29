export = DiscordLogger;
declare function DiscordLogger(appName?:string, webhookAuth?:webhookAuth):void;

interface webhookAuth {
    id: string,
    token: string
}
