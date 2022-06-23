import client from "../Client/Client";
import type { TextBasedChannel } from "discord.js";

async function getChannel() {
    const GUILD = await client.guilds.fetch(process.env.BRIDGE_GUILD_ID as string);
    if (!GUILD) throw new Error("Invalid GuildID specified.");
    const GCHANNEL = await GUILD.channels.fetch(process.env.BRIDGE_CHANNEL_ID as string);
    if (!GCHANNEL) throw new Error("Invalid ChannelID specified.");
    return GCHANNEL as TextBasedChannel;
}


export default getChannel();