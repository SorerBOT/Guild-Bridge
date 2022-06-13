import { Discord, Slash, SlashOption } from "discordx";
import { CommandInteraction } from "discord.js";
import { client } from "../main.js";

@Discord()
export abstract class Eval {
    @Slash("eval", { description: "Allows Evaluation Of JavaScript Code On Remote Machine" })
    async eval(
        @SlashOption("command", { description: "JavaScript Code To Execute" })
        command: string,
        interaction: CommandInteraction
    ): Promise<void> {
        // if (interaction.user.id !== "406766456663965698") return;
        // try {
        //     const beginning: number = Date.now();
        //     const func: Function = new Function("client", "interaction", command);
        //     const output: string | undefined = await func(client, interaction);
        //     const timeDelta: string = (Date.now() - beginning).toFixed(2) + "ms";
        //     await interaction.reply(`Done. Took: ${timeDelta} to execute.\n` + "```" + output ?? "undefined" + "```");
        // } catch (error) {
        //     if (error instanceof Error) return interaction.reply(`Failed to execute Command:\n${error.message}\n` + "```" + error.stack + "```");
        //     await interaction.reply({ content: "Failed to execute Command, unknown Error has been logged to the Console." });
        //     console.error(error);
        // }
        await interaction.reply("An Error has occurred!");
    }
}