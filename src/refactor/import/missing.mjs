import { file_js_parse } from "../../file/js/parse.mjs";
import { js_identifiers } from "../../js/identifiers.mjs";
import { js_import_all } from "../../js/import/all.mjs";
import { function_name_all } from "../../function/name/all.mjs";
import { object_property_get } from "../../object/property/get.mjs";
import { js_node_is_type } from "../../js/node/is/type.mjs";
import { js_node_is_import_specifier } from "../../js/node/is/import/specifier.mjs";
import { js_node_is_identifier } from "../../js/node/is/identifier.mjs";
import { array_first } from "../../array/first.mjs";

export async function refactor_import_missing(file_path) {
    let parsed = await file_js_parse(file_path);
    let identifiers = js_identifiers(parsed);
    let import_all = js_import_all(parsed);
    let function_names = await function_name_all();
console.log(import_all)
    for (let i of import_all) {
        let source = object_property_get(i, 'source');
        if (!js_node_is_type(source, 'Literal')) {
            continue;
        }

        if (!js_node_is_import_specifier(i)) {
            continue;
        }
        let values = [
            object_property_get(i, 'imported'),
            object_property_get(i, 'local')
        ]
        if (array_any(values, v => !js_node_is_identifier(v))) {
            continue;
        }
        let first = array_first(values);
        let first_name = object_property_get(first, 'name');
        if (array_any(values, v => object_property_get(v, 'name') !== first_name)) {
            continue;
        }
        console.log(i)
    }
}
