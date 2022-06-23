import CHANNEL from "../../Discord/Util/getChannel";
import Player from "../Interfaces/Player";
import { createGuildMemberStatusEmbed } from "../../Discord/Util/createEmbed";
import LogEvent from "../../Log/Events/LogEvent";

export default async function guildMemberStatus(match: RegExpMatchArray): Promise<void> {
    if (!match.groups) throw new Error("Guild Member Status Regex is flawed.");
    const player: Player = {
        username: match.groups.username,
        status: match.groups.status === "joined" ? true : false
    }
    LogEvent("STATUS", `${match.input as string}`, undefined, undefined, true);
    await (await CHANNEL).send({embeds: [createGuildMemberStatusEmbed(player.username, player.status, match.input as string)]});
}