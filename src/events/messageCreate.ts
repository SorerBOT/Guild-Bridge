import { Discord, On, Client } from "discordx";
import type {ArgsOf} from "discordx";
import Bot from "../Mineflayer/initialiseBot.js";

@Discord()
abstract class AppDiscord {
  @On("messageCreate")
  private onMessage(
    [message]: ArgsOf<"messageCreate">,
    client: Client,
    guardPayload: any
  ) {
    if (message.author.bot) return;
    if (message.channel.id !== process.env.BRIDGE_CHANNEL_ID) return;
    Bot.chat(`/gc ${message.author.username}: ${message.content}`);
  }
}