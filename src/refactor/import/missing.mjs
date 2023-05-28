import { file_js_parse } from "../../file/js/parse.mjs";

export function refactor_import_missing(file_path) {
    let parsed = await file_js_parse(file_path);
    let identifiers = js_identifiers(parsed);
    console.log(identifiers)
}