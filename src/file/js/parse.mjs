import { file_read } from "../read.mjs";

export function file_js_parse(file_path) {
    let unparsed = await file_read(file_path);
    return js_parse(unparsed);
}

const {Parser} = require("acorn")
function js_parse(unparsed) {
    let parsed = Parser.parse(unparsed);
    return parsed;
}
