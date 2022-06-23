import { mineflayerBotOptions } from "./BotOptions";
import message from "../Events/message";
import end from "../Events/end";
import mineflayer from "mineflayer";

export default function initialiseBot(): mineflayer.Bot {
    const Bot: mineflayer.Bot = mineflayer.createBot(mineflayerBotOptions);
    // Removing Chat Patterns which are likely to collide with Hypixel's custom chat.
    Bot.removeChatPattern("chat");
    Bot.removeChatPattern("whisper");

    Bot.on("end", (reason) => end(reason));
    Bot.on("message", (jsonMsg, position) => message(Bot, jsonMsg, position));

    return Bot;
}