import { list_add } from '../../list/add.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { list_any } from '../../list/any.mjs';
import { function_dependencies_non_recursive } from '../dependencies/non/recursive.mjs';
import { function_name_all } from '../name/all.mjs';
export async function function_callers_names(function_name) {
    let result = [];
    let candidates = await function_name_all();
    for (let c of candidates) {
        let dependencies = await function_dependencies_non_recursive(c);
        if (list_any(dependencies, function v(d) {
                return object_property_get(d, 'function_name') === function_name;
            })) {
            list_add(result, c);
        }
    }
    return result;
}