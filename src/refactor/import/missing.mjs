import { file_js_parse } from "../../file/js/parse.mjs";
import { js_identifiers } from "../../js/identifiers.mjs";
import { js_import_all } from "../../js/import/all.mjs";
import { function_name_all } from "../../function/name/all.mjs";

export async function refactor_import_missing(file_path) {
    let parsed = await file_js_parse(file_path);
    let identifiers = js_identifiers(parsed);
    let import_all = js_import_all(parsed);
    let function_names = await function_name_all();

    for (let i of import_all) {

        console.log(i.specifiers)
    }

}