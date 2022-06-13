import { ChatMessage } from "prismarine-chat"
import mineflayer from "mineflayer";
import { guildMemberStatusRegex, guildMemberMessageRegex, guildMemberActivityRegex } from "../../Util/regexRegisters.js";
import guildMemberMessage from "../MessageRegisters/guildMemberMessage.js";
import guildMemberStatus from "../MessageRegisters/guildMemberStatus.js";
import guildMemberVerifyBot from "../../Util/verifyBot.js";
// guildMemberStatusRegex: usecases: #1: Guild > Sorer left. #2: Guild > Sorer joined.
// guildMemberActivityRegex: usecases: 1#: [MVP+] Katoulis joined the guild! #2: [MVP+] Katoulis was kicked from the guild by [MVP+] Sorer! #3: [MVP+] Katoulis left the guild!
export default async function message(Bot: mineflayer.Bot, jsonMsg: ChatMessage, position: string) {
    const message = jsonMsg.toString();
    if (guildMemberVerifyBot(message, Bot.username)) return;
    if (guildMemberMessageRegex.test(message)) guildMemberMessage(message.match(guildMemberMessageRegex) as RegExpMatchArray);
    if (guildMemberStatusRegex.test(message)) guildMemberStatus(message.match(guildMemberStatusRegex) as RegExpMatchArray);
    if (guildMemberActivityRegex.test(message)) guildMemberStatus(message.match(guildMemberActivityRegex) as RegExpMatchArray);
}