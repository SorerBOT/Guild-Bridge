import mineflayer from "mineflayer";
import message from "./Events/message.js";
import end from "./Events/end.js";
import { mineflayerBotOptions } from "./BotOptions.js";
var Bot: mineflayer.Bot;
export default function initialiseBot() {
    Bot = mineflayer.createBot(mineflayerBotOptions);

    Bot.removeChatPattern("chat");
    Bot.removeChatPattern("whisper");

    Bot.on("end", (reason) => end(reason));
    Bot.on("message", (jsonMsg, position) => message(Bot, jsonMsg, position));
}