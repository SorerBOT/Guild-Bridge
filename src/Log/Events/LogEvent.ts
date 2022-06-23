import Chalk from "chalk";
import figlet from "figlet";

export default function LogEvent(event: string, message: string, important: boolean = false, discord = false, minecraft = false) {
    const whereEventOccur = discord ? Chalk.hex("#7289DA")("DISCORD") : minecraft ? Chalk.hex("#34eb55")("MINECRAFT") : "";
    if (important) console.log(
        whereEventOccur, 
        Chalk.bgGreen(figlet.textSync(event, {
            font: 'Ghost',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 80,
            whitespaceBreak: true
        }))
    );
    else console.log(whereEventOccur, Chalk.bgGreenBright(event));
    console.log(Chalk.bgGray(message));
}