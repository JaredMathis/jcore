import { file_read } from "../read.mjs";
const {Parser} = require("acorn")

export function file_js_parse(file_path) {
    let unparsed = await file_read(file_path);
    let parsed = Parser.parse(unparsed);
    return parsed;
}