import { file_js_parse } from "../../file/js/parse.mjs";
import { js_identifiers } from "../../js/identifiers.mjs";
import { js_import_all } from "../../js/import/all.mjs";
import { function_name_all } from "../../function/name/all.mjs";
import { object_property_get } from "../../object/property/get.mjs";
import { js_node_is_type } from "../../js/node/is/type.mjs";

export async function refactor_import_missing(file_path) {
    let parsed = await file_js_parse(file_path);
    let identifiers = js_identifiers(parsed);
    let import_all = js_import_all(parsed);
    let function_names = await function_name_all();

    for (let i of import_all) {
        if (js_node_is_import_specifier(i)) {

        }
    }

}

function js_node_is_import_specifier(i) {
    return js_node_is_type(i, 'ImportSpecifier');
}
