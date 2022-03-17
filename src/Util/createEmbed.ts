import { HexColorString, MessageEmbed } from "discord.js"

export function createMemberStatusEmbed(status: boolean, username: string): MessageEmbed {
    if (!(process.env.STATUS_COLOUR_POSITIVE && process.env.STATUS_COLOUR_NEGATIVE)) throw new Error("No member status colours specified.");
    const colour = status ? process.env.STATUS_COLOUR_POSITIVE : process.env.STATUS_COLOUR_NEGATIVE;
    const hexColourValue = colour as HexColorString;
    const embed = new MessageEmbed()
    .setColor(hexColourValue)
    .setAuthor({ 
        name: `Guild > ${username} is now ${status ? "online" : "offline"}!`,
        url: `https://sky.shiiyu.moe/stats/${username}`,
        iconURL: `https://minotar.net/helm/${username}.png`
    })
    .setTimestamp();
    return embed;
}
export function createMemberMessageEmbed(username: string, message: string, rank: string): MessageEmbed {
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor({
        name: `${rank} ${username}:`,
        url: `https://sky.shiiyu.moe/stats/${username}`,
        iconURL: `https://minotar.net/helm/${username}.png`
    })
    .setDescription(message);
    return embed;
}