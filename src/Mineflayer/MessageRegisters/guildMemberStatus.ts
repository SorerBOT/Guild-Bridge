import CHANNEL from "../../Util/channel.js";
import Player from "../../Interfaces/Player.js";
import { createGuildMemberStatusEmbed } from "../../Util/createEmbed.js";

export default function guildMemberStatus(match: RegExpMatchArray): void {
    if (!match.groups) throw new Error("Guild Member Status Regex is flawed.");
    const player: Player = {
        username: match.groups.username,
        status: match.groups.status === "joined" ? true : false
    }
    CHANNEL.send({embeds: [createGuildMemberStatusEmbed(player.username, player.status, match.input as string)]});
}