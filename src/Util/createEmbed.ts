import { HexColorString, MessageEmbed } from "discord.js"
if (!(process.env.STATUS_COLOUR_POSITIVE && process.env.STATUS_COLOUR_NEGATIVE)) throw new Error("No member status colours specified.");

export function createGuildMemberStatusEmbed(username: string, status: boolean, message: string): MessageEmbed {
    const colour = status ? process.env.STATUS_COLOUR_POSITIVE : process.env.STATUS_COLOUR_NEGATIVE;
    const embed = new MessageEmbed()
    .setColor(colour as HexColorString)
    .setAuthor({ 
        name: message,
        url: `https://sky.shiiyu.moe/stats/${username}`,
        iconURL: `https://minotar.net/helm/${username}.png`
    }).setTimestamp();
    return embed;
}
export function createGuildMemberMessageEmbed(username: string, message: string, rank: string): MessageEmbed {
    const embed = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription(message)
    .setAuthor({
        name: `${rank} ${username}:`,
        url: `https://sky.shiiyu.moe/stats/${username}`,
        iconURL: `https://minotar.net/helm/${username}.png`
    }).setTimestamp();
    return embed;
}