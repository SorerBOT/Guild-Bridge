import initialiseBot from "./Mineflayer/Bot/initialiseBot";
import client from "./Discord/Client/Client";
import Ready from "./Discord/Events/Ready";
import MessageCreate from "./Discord/Events/MessageCreate";
import Discord from "discord.js";


client.once("ready", () => Ready(client));
client.on("messageCreate", (message: Discord.Message) => MessageCreate(client, message));

export default initialiseBot();