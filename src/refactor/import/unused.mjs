import { integer_value_2 } from '../../integer/value/2.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { js_imports_remove_multiple } from '../../js/imports/remove/multiple.mjs';
import { metadata } from '../../metadata.mjs';
import { js_identifier_counts } from '../../js/identifier/counts.mjs';
import { object_keys_each_filter } from '../../object/keys/each/filter.mjs';
import { list_intersection } from '../../list/intersection.mjs';
import { list_map } from '../../list/map.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { js_import_all_with_function_names } from '../../js/import/all/with/function/names.mjs';
import { js_mapper_args_is } from '../../js/mapper/args/is.mjs';
export async function refactor_import_unused(args) {
    arguments_assert(arguments, [js_mapper_args_is]);
    let parsed = object_property_get(args, 'parsed');
    let imports = await js_import_all_with_function_names(parsed);
    let import_name_all = list_map(imports, function v(w) {
        let v_2 = object_property_get(w, 'name');
        return v_2;
    });
    let counts = js_identifier_counts(parsed);
    let twices = object_keys_each_filter(counts, function is_two(value, key) {
        return value === integer_value_2();
    });
    let intersection = list_intersection(import_name_all, twices);
    js_imports_remove_multiple(parsed, imports, intersection);
    metadata([]);
}