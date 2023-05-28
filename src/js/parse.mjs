
const {Parser} = require("acorn")
export function js_parse(unparsed) {
    let parsed = Parser.parse(unparsed);
    return parsed;
}