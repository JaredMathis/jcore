import { equal } from '../../equal.mjs';
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
    let v_3 = 'parsed';
    let parsed = object_property_get(args, v_3);
    let imports = await js_import_all_with_function_names(parsed);
    let v_4 = function v(w) {
        let v_6 = 'name';
        let v_2 = object_property_get(w, v_6);
        return v_2;
    };
    let import_name_all = list_map(imports, v_4);
    let counts = js_identifier_counts(parsed);
    let v_5 = function is_two(value, key) {
        let v_7 = integer_value_2();
        let v_8 = equal(value, v_7);
        return v_8;
    };
    let twices = object_keys_each_filter(counts, v_5);
    let intersection = list_intersection(import_name_all, twices);
    js_imports_remove_multiple(parsed, imports, intersection);
    metadata([]);
}