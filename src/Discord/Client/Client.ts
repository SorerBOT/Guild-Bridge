import ClientOptions from "./ClientOptions";
import Discord from "discord.js";
import "dotenv/config";

const client = new Discord.Client(ClientOptions);
client.login(process.env.BOT_TOKEN);

export default client;