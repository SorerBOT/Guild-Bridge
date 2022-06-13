import mineflayer from "mineflayer";
import initialiseBot from "../initialiseBot";
import printError from "../../Util/printError";

export default function end(reason: string) {
    printError("DISCONNECTED", !!reason ? reason : "NOT SPECIFIED");
    initialiseBot();
}