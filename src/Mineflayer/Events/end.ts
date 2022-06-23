import mineflayer from "mineflayer";
import initialiseBot from "../Bot/initialiseBot";
import printError from "../../Log/Errors/LogError";

export default function end(reason: string) {
    printError("DISCONNECTED", !!reason ? reason : "NOT SPECIFIED");
    initialiseBot();
}