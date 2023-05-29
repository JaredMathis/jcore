import { array_add } from '../../array/add.mjs';
import { error } from '../../error.mjs';
import { js_identifier_counts } from '../../js/identifier/counts.mjs';
import { js_import_all_to_function_name } from '../../js/import/all/to/function/name.mjs';
import { object_property_get } from '../../object/property/get.mjs';
export async function refactor_import_extra(parsed) {
    let import_name_all = js_import_all_to_function_name(parsed);
    let counts = js_identifier_counts(parsed);
    let twices = [];
    function is_two(value) {
        return value === 2;
    }
    let predicate = is_two;
    object_each_filter(counts, predicate);
    let intersection = array_intersection(import_name_all)
    console.log({import_name_all,counts})
    error();
}

function object_each_filter(object, predicate) {
    let result = [];
    let lambda = (value, key) => {
        if (predicate(value)) {
            array_add(result, value);
        }
    }
    object_each(object, lambda);
    return result;
}
function object_each(object, lambda) {
    for (let key in object) {
        let value = object_property_get(object, key);
        lambda(value, key);
    }
}

