
import {Parser} from "acorn";
export function js_parse(unparsed) {
    let parsed = Parser.parse(unparsed);
    return parsed;
}