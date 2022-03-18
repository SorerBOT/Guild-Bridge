import CHANNEL from "../../Util/channel.js";
import Player from "../../Interfaces/Player.js";
import { createGuildMemberMessageEmbed } from "../../Util/createEmbed.js";

export default function guildMemberMessage(match: RegExpMatchArray): void {
    const player: Player = {
        username: match[2],
        rank: match[3] ? match[3] : "",
        status: true
    }
    CHANNEL.send({embeds: [createGuildMemberMessageEmbed(player.username, match[4], player.rank)]});
}