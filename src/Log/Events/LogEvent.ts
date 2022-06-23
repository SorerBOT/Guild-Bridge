import Chalk from "chalk";
import figlet from "figlet";

export default function LogEvent(event: string, message: string, important: boolean = false) {
    if (important) console.log(
        Chalk.bgGreen(figlet.textSync(event, {
            font: 'Ghost',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: true
        }))
    );
    else console.log(Chalk.bgGreenBright(event));
    console.log(Chalk.bgGray(message));
}