import mineflayer from "mineflayer";
import { mineflayerBotOptions } from "../BotOptions.js";

export default function end(Bot: mineflayer.Bot, reason: string) {
    console.warn(reason);
    setTimeout(() => {
        Bot.connect(mineflayerBotOptions);
    }, 10000);
}