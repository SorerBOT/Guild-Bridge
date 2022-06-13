import figlet from "figlet";
import chalk from "chalk";
import gradient from "gradient-string";

export default function printError(title: string, error: string) {
    figlet(title, (err, data) => { console.log(chalk.bgRedBright(data)); });
    console.log(gradient.mind.multiline(error));
}