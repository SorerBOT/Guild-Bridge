export const guildMemberMessageRegex = /Guild > ?(?<hypixelRank>\[[a-zA-z +]+])? (?<username>[a-zA-z0-9_]+) ?(?<guildRank>\[[a-zA-z0-9]+])?: (?<content>.+)$/;
export const guildMemberStatusRegex = /Guild > (?<username>[a-zA-z0-9_]+) (?<status>joined|left)\./;
export const guildMemberVerifyBotRegex = /Guild > ?(?<hypixelRank>\[[a-zA-z +]+])? (?<username>[a-zA-z0-9_]+)/;
export const commandMessageRegex = new RegExp(`^${process.env.COMMAND_MESSAGE_PREFIX}([a-zA-Z0-9_]+) ?(.*)$`);