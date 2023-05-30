import { js_identifier_counts } from '../../js/identifier/counts.mjs';
import { object_each_filter } from '../../object/each/filter.mjs';
import { list_intersection } from '../../list/intersection.mjs';
import { js_body_get } from '../../js/body/get.mjs';
import { list_map } from '../../list/map.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { js_import_all_with_function_names } from '../../js/import/all/with/function/names.mjs';
import { list_find } from '../../list/find.mjs';
import { list_remove_all } from '../../list/remove/all.mjs';
export async function refactor_import_unused(args) {
    let {parsed} = args;
    let imports = await js_import_all_with_function_names(parsed);
    let import_name_all = list_map(imports, w => object_property_get(w, 'name'));
    let counts = js_identifier_counts(parsed);
    let twices = object_each_filter(counts, function is_two(value, key) {
        return value === 2;
    });
    let intersection = list_intersection(import_name_all, twices);
    let imports_from_intersection = list_map(intersection, import_name => list_find(imports, i => object_property_get(i, 'name') === import_name));
    let import_statements_to_remove = list_map(imports_from_intersection, i => object_property_get(i, 'import'));
    let body = js_body_get(parsed);
    list_remove_all(body, import_statements_to_remove);
}