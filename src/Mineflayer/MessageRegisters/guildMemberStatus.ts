import CHANNEL from "../../Util/channel.js";
import Player from "../../Interfaces/Player.js";
import { createGuildMemberStatusEmbed } from "../../Util/createEmbed.js";

export default function guildMemberStatus(match: RegExpMatchArray): void {
    const player: Player = {
        username: match[1],
        rank: match[3] ? match[3] : "",
        status: match[2] === "joined" ? true : false
    }
    CHANNEL.send({embeds: [createGuildMemberStatusEmbed(player.username, player.status)]});
}