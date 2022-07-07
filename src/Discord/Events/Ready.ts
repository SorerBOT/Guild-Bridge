import Discord from "discord.js";
import LogEvent from "../../Log/Events/LogEvent";

export default function Ready(client: Discord.Client) {
    console.log("Hello Keren!");
    LogEvent("Ready", (client.user?.username ?? "Guild-Bridge") + " has logged on!", true);
}