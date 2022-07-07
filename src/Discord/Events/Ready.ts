import Discord from "discord.js";
import LogEvent from "../../Log/Events/LogEvent";

export default function Ready(client: Discord.Client) {
    LogEvent("Ready", (client.user?.username ?? "Guild-Bridge") + " has logged on!", true);
}