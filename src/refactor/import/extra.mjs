import { js_identifier_counts } from '../../js/identifier/counts.mjs';
import { object_each_filter } from '../../object/each/filter.mjs';
import { array_intersection } from '../../array/intersection.mjs';
import { js_body_get } from '../../js/body/get.mjs';
import { array_map } from '../../array/map.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { js_exported_function_names } from '../../js/exported/function/names.mjs';
import { js_import_all_with_function_names } from '../../js/import/all/with/function/names.mjs';
import { array_find } from '../../array/find.mjs';
import { array_remove_all } from '../../array/remove/all.mjs';
export async function refactor_import_extra(parsed) {
    let imports = js_import_all_with_function_names(parsed);
    let import_name_all = array_map(imports, w => object_property_get(w, 'name'));
    let counts = js_identifier_counts(parsed);
    let twices = object_each_filter(counts, function is_two(value, key) {
        return value === 2;
    });
    let intersection = array_intersection(import_name_all, twices);
    let exported_function_names = js_exported_function_names(parsed);
    let imports_from_intersection = array_map(intersection, import_name => array_find(imports, i => object_property_get(i, 'name') === import_name));
    let import_statements_to_remove = array_map(imports_from_intersection, i => object_property_get(i, 'import'));
    let body = js_body_get(parsed);
    array_remove_all(body, import_statements_to_remove);
}