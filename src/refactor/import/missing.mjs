import { file_js_parse } from "../../file/js/parse.mjs";
import { js_identifiers } from "../../js/identifiers.mjs";
import { js_import_all } from "../../js/import/all.mjs";
import { function_name_all } from "../../function/name/all.mjs";
import { object_property_get } from "../../object/property/get.mjs";
import { js_node_is_type } from "../../js/node/is/type.mjs";
import { js_node_is_import_specifier } from "../../js/node/is/import/specifier.mjs";
import { js_node_is_identifier } from "../../js/node/is/identifier.mjs";
import { array_first } from "../../array/first.mjs";
import { directory_current } from "../../directory/current.mjs";
import { js_directory_separator } from "../../js/directory/separator.mjs";
import { string_starts_with } from "../../string/starts/with.mjs";
import { array_length } from "../../array/length.mjs";
import { array_map } from "../../array/map.mjs";
import { array_any } from "../../array/any.mjs";

export async function refactor_import_missing(file_path) {
    let parsed = await file_js_parse(file_path);
    let identifiers = js_identifiers(parsed);
    let import_all = js_import_all(parsed);
    let function_names = await function_name_all();
    for (let i of import_all) {
        let source = object_property_get(i, 'source');
        if (!js_node_is_type(source, 'Literal')) {
            continue;
        }

        let source_value = object_property_get(source, 'value');
        const prefix = `${directory_current()}${js_directory_separator()}`;
        if (!string_starts_with(source_value, prefix)) {
            continue;
        }

        let specifiers = object_property_get(i, 'specifiers');
        if (array_length(specifiers) !== 1) {
            continue;
        }

        let specifier = array_first(specifiers);

        if (!js_node_is_import_specifier(specifier)) {
            continue;
        }
        let properties = ['imported', 'local']
        let values = array_map(properties, p =>  object_property_get(specifier, p));
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
