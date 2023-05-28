import { file_js_parse } from "../../file/js/parse.mjs";
import { js_identifiers } from "../../js/identifiers.mjs";

export async function refactor_import_missing(file_path) {
    let parsed = await file_js_parse(file_path);
    let identifiers = js_identifiers(parsed);
    let import_all = js_import_all(parsed);
    console.log(identifiers)
}