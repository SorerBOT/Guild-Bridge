import "reflect-metadata";
import "dotenv/config";
import { Intents } from "discord.js";
import { Client } from "discordx";
import { dirname, importx } from "@discordx/importer";
import initialiseBot from "./Mineflayer/initialiseBot.js";

export const client = new Client({
  silent: true,
  simpleCommand: {
    prefix: "!",
  },
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MEMBERS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_VOICE_STATES
  ],
  botGuilds: [(client) => client.guilds.cache.map((guild) => guild.id)],
});

client.once("ready", async () => {
  await client.guilds.fetch();
  await client.initApplicationCommands({
    guild: { log: true },
    global: { log: true },
  });
  console.log(`Client: ${client.user?.username} is now online!`);
});

async function run() {
  await importx(dirname(import.meta.url) + '/{events,commands}/**/*.{js,ts}');
  if (!process.env.BOT_TOKEN) throw Error("Could not find BOT_TOKEN in your environment");
  await client.login(process.env.BOT_TOKEN);
}

await run();