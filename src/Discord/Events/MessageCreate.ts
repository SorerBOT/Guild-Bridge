import Discord from "discord.js";
import LogEvent from "../../Log/Events/LogEvent";
import Bot from "../../main";
export default function MessageCreate(client: Discord.Client, message: Discord.Message) {
    if (message.author.bot) return;
    if (message.channel.id !== process.env.BRIDGE_CHANNEL_ID) return;
    LogEvent("MESSAGE", `${message.author.tag}: ${message.content}`, undefined, true, undefined);
    Bot.chat(`/gc ${message.author.username}: ${message.content}`);
}