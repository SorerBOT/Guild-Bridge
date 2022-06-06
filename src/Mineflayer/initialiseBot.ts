import mineflayer from "mineflayer";
import { mineflayerBotOptions } from "./BotOptions.js";

const Bot = mineflayer.createBot(mineflayerBotOptions);

Bot.removeChatPattern("chat");
Bot.removeChatPattern("whisper");

export default Bot;