import CHANNEL from "../../Discord/Util/getChannel";
import Player from "../Interfaces/Player";
import { createGuildMemberMessageEmbed } from "../../Discord/Util/createEmbed";
import LogEvent from "../../Log/Events/LogEvent";

export default async function guildMemberMessage(match: RegExpMatchArray): Promise<void> {
    if (!match.groups) throw new Error("Guild Member Message Regex is flawed.");
    const player: Player = {
        username: match.groups.username,
        rank: match.groups.rank ? match.groups.rank : "",
        status: true
    }
    LogEvent("MESSAGE", `${player.username + player.rank}: ${match.groups.content}`, undefined, undefined, true);
    await (await CHANNEL).send({embeds: [createGuildMemberMessageEmbed(player.username, match.groups.content, player.rank as string)]});
}