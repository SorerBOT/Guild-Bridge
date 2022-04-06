import CHANNEL from "../../Util/channel.js";
import Player from "../../Interfaces/Player.js";
import { createGuildMemberMessageEmbed } from "../../Util/createEmbed.js";

export default function guildMemberMessage(match: RegExpMatchArray): void {
    if (!match.groups) throw new Error("Guild Member Message Regex is flawed.");
    const player: Player = {
        username: match.groups.username,
        rank: match.groups.rank ? match.groups.rank : "",
        status: true
    }
    CHANNEL.send({embeds: [createGuildMemberMessageEmbed(player.username, match.groups.content, player.rank as string)]});
}