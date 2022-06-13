import Bot from "../initialiseBot.js";
import printError from "../../Util/printError.js";

export default function end(reason: string) {
    printError("DISCONNECTED", !!reason ? reason : "NOT SPECIFIED");
    Bot.initialiseBot;
}