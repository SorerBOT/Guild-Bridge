import { ChatMessage } from "prismarine-chat"
import mineflayer from "mineflayer";
import { guildMemberStatusRegex, guildMemberMessageRegex } from "../../Util/regexRegisters.js";
import guildMemberMessage from "../MessageRegisters/guildMemberMessage.js";
import guildMemberStatus from "../MessageRegisters/guildMemberStatus.js";
import guildMemberVerifyBot from "../../Util/verifyBot.js";

export default async function message(Bot: mineflayer.Bot, jsonMsg: ChatMessage, position: string) {
    const message = jsonMsg.toString();
    if (guildMemberVerifyBot(message, Bot.username)) return;
    if (guildMemberMessageRegex.test(message)) guildMemberMessage(message.match(guildMemberMessageRegex) as RegExpMatchArray);
    if (guildMemberStatusRegex.test(message)) guildMemberStatus(message.match(guildMemberStatusRegex) as RegExpMatchArray);
}