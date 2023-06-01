import { js_imports_remove_multiple } from '../../js/imports/remove/multiple.mjs';
import { metadata } from '../../metadata.mjs';
import { js_identifier_counts } from '../../js/identifier/counts.mjs';
import { object_each_filter } from '../../object/each/filter.mjs';
import { list_intersection } from '../../list/intersection.mjs';
import { list_map } from '../../list/map.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { js_import_all_with_function_names } from '../../js/import/all/with/function/names.mjs';
export async function refactor_import_unused(args) {
    let {parsed} = args;
    let imports = await js_import_all_with_function_names(parsed);
    let import_name_all = list_map(imports, w => object_property_get(w, 'name'));
    let counts = js_identifier_counts(parsed);
    let twices = object_each_filter(counts, function is_two(value, key) {
        return value === 2;
    });
    let intersection = list_intersection(import_name_all, twices);
    js_imports_remove_multiple(imports, intersection, parsed);
    metadata([]);
}