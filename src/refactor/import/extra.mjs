import { array_add } from '../../array/add.mjs';
import { error } from '../../error.mjs';
import { js_identifier_counts } from '../../js/identifier/counts.mjs';
import { js_import_all_to_function_name } from '../../js/import/all/to/function/name.mjs';
import { object_each_filter } from '../../object/each/filter.mjs';
import { array_intersection } from '../../array/intersection.mjs';
export async function refactor_import_extra(parsed) {
    let import_name_all = js_import_all_to_function_name(parsed);
    let counts = js_identifier_counts(parsed);
    let twices = object_each_filter(counts, function is_two(value) {
        return value === 2;
    });
    let intersection = array_intersection(import_name_all)
    console.log({import_name_all,twices})
    error();
}



