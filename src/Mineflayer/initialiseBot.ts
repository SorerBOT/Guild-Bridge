import mineflayer from "mineflayer";
import message from "./Events/message.js";
import end from "./Events/end.js";
import { mineflayerBotOptions } from "./BotOptions.js";
class minecraftBot {
    Bot: mineflayer.Bot;
    constructor() { this.Bot = this.initialiseBot(); }
    initialiseBot() {
        const Bot = mineflayer.createBot(mineflayerBotOptions);

        Bot.removeChatPattern("chat");
        Bot.removeChatPattern("whisper");

        Bot.on("end", (reason) => end(reason));
        Bot.on("message", (jsonMsg, position) => message(Bot, jsonMsg, position));

        this.Bot = Bot;
        return Bot;
    }
}

export default new minecraftBot;


// export default function initialiseBot() {
//     const Bot = mineflayer.createBot(mineflayerBotOptions);

//     Bot.removeChatPattern("chat");
//     Bot.removeChatPattern("whisper");

//     Bot.on("end", (reason) => end(reason));
//     Bot.on("message", (jsonMsg, position) => message(Bot, jsonMsg, position));
// }

