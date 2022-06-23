import { guildMemberVerifyBotRegex } from "../Regex/regexRegisters";

export default function messageAuthorIsBot(message: string, name: string): boolean {
    if (!guildMemberVerifyBotRegex.test(message)) return false;
    const match = message.match(guildMemberVerifyBotRegex) as RegExpExecArray;
    if (match[2] === name) return true;
    return false;
}