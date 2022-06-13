import { Discord, On, Client } from "discordx";
import type { ArgsOf } from "discordx";
import Bot from "../Mineflayer/initialiseBot.js";
import { client } from "../main.js";
@Discord()
abstract class AppDiscord {
    @On("interactionCreate")
    private onInteraction(
        [interaction]: ArgsOf<"interactionCreate">,
        client: Client,
        guardPayload: any
    ) {
        client.executeInteraction(interaction);
    }
}