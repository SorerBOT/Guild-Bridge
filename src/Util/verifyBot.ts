import { guildMemberVerifyBotRegex } from "./regexRegisters.js";

export default function guildMemberVerifyBot(message: string, name: string): boolean {
    if (!guildMemberVerifyBotRegex.test(message)) return false;
    const match = message.match(guildMemberVerifyBotRegex) as RegExpExecArray;
    if (match[2] === name) return true;
    return false;
}