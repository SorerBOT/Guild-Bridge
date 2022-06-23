import Discord from "discord.js";
import LogEvent from "../../Log/Events/LogEvent";

export default function MessageCreate(client: Discord.Client, message: Discord.Message) {
    LogEvent("Message", `${message.author.tag}: ${message.content}`);
}