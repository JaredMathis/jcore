import { array_add } from '../../array/add.mjs';
import { error } from '../../error.mjs';
import { js_identifier_counts } from '../../js/identifier/counts.mjs';
import { js_import_all_to_function_name } from '../../js/import/all/to/function/name.mjs';
import { object_each_filter } from '../../object/each/filter.mjs';
import { array_intersection } from '../../array/intersection.mjs';
import { js_node_is_export_named_declaration } from '../../js/node/is/export/named/declaration.mjs';
import { array_filter } from '../../array/filter.mjs';
import { js_body_get } from '../../js/body/get.mjs';
import { array_map } from '../../array/map.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { js_exported_function_names } from '../../js/exported/function/names.mjs';
import { js_import_all_with_function_names } from '../../js/import/all/with/function/names.mjs';
export async function refactor_import_extra(parsed) {
    let imports = js_import_all_with_function_names(parsed);
    let import_name_all = array_map(
        with_function_names, w => object_property_get(w, 'name'));
    let counts = js_identifier_counts(parsed);
    let twices = object_each_filter(counts, function is_two(value, key) {
        return value === 2;
    });
    let intersection = array_intersection(import_name_all, twices)
    let exported_function_names = js_exported_function_names(parsed);
    console.log({intersection})
    error();
}



