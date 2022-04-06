import mineflayer from "mineflayer";
import { mineflayerBotOptions } from "../BotOptions.js";

export default function end(Bot: mineflayer.Bot, reason: string) {
    console.warn(reason);
    setTimeout(() => {
        mineflayer.createBot(mineflayerBotOptions);
    }, 10000);
}