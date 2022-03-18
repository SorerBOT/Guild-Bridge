import { client } from "../../main.js";
import { ChatMessage } from "prismarine-chat"
import mineflayer from "mineflayer";
import { createMemberStatusEmbed, createMemberMessageEmbed } from "../../Util/createEmbed.js";
import { TextBasedChannel } from "discord.js";
import { memberStatusRegex, guildMessageRegex, commandMessageRegex } from "../../Util/regexRegisters.js";

const GUILD = await client.guilds.fetch(process.env.BRIDGE_GUILD_ID as string);
if (!GUILD) throw new Error("Invalid GuildID specified.");
const GCHANNEL = await GUILD.channels.fetch(process.env.BRIDGE_CHANNEL_ID as string);
if (!GCHANNEL) throw new Error("Invalid ChannelID specified.");
const CHANNEL = GCHANNEL as TextBasedChannel;

interface Player {
    username: string;
    uuid?: string;
    rank: string;
    status: boolean;
}

export default async function message(Bot: mineflayer.Bot, jsonMsg: ChatMessage, position: string) {
    const message = jsonMsg.toString();
    if (!(memberStatusRegex.test(message) || guildMessageRegex.test(message))) return;
    const match = message.match(memberStatusRegex.test(message) ? memberStatusRegex : guildMessageRegex) as RegExpExecArray;
    const index = memberStatusRegex.test(message) ? 1 : 2;
    if (match[index] === Bot.username) return;
    const player: Player = {
        username: match[index],
        rank: guildMessageRegex.test(message) ? match[3] ? match[3] : "" : "",
        status: (memberStatusRegex.test(message) ? (match[2] === "joined" ? true : false) : true)
    }
    CHANNEL.send({embeds: [memberStatusRegex.test(message) ? (createMemberStatusEmbed(player.status, player.username)) : createMemberMessageEmbed(player.username, match[4], player.rank)]});
}