import mineflayer from "mineflayer";

if (typeof process.env.MINECRAFT_VERSION !== "string") console.warn("No version specified. (1.18.2)");
if (typeof process.env.HOST !== "string") throw new Error("No host specified.");
if (typeof process.env.USERNAME !== "string") throw new Error("No username specified.");
if (typeof process.env.PASSWORD !== "string") throw new Error("No password specified.");
if (typeof process.env.AUTHENTICATION !== "string") throw new Error("No authentication protocol specified.");
if (process.env.AUTHENTICATION !== "microsoft" && process.env.AUTHENTICATION !== "mojang") throw new Error("Invalid authentication protocol specified");

export const mineflayerBotOptions: mineflayer.BotOptions = {
    version: process.env.MINECRAFT_VERSION,
    host: process.env.HOST,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    auth: process.env.AUTHENTICATION
};