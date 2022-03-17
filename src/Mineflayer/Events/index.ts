import "dotenv/config";
import { keys } from "ts-transformer-keys";
import fs from "fs";
import mineflayer from "mineflayer";
import Bot from "../initialiseBot.js";
const fileFilter = /\.[t,j]s/g;

export default function bindEvents() {
    fs.readdir("./src/Mineflayer/Events", (err, files) => {
        if (err) console.error(err);
        files.forEach(async (file) => {
            if  (!file.match(fileFilter)) return;
            const fileName = file.split(".")[0]; 
            if (!keys<mineflayer.BotEvents>().find(event => event.toLowerCase() === fileName.toLowerCase())) return;
            const event = (await import(`./${file}`.replace(".ts", ".js"))).default;
            const eventName = fileName as keyof mineflayer.BotEvents;
            Bot.on(eventName, event.bind(null, Bot));
        });
    });
}