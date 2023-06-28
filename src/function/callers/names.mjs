import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { equal } from '../../equal.mjs';
import { list_add } from '../../list/add.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { list_any } from '../../list/any.mjs';
import { function_dependencies_non_recursive } from '../dependencies/non/recursive.mjs';
import { function_name_all } from '../name/all.mjs';
export async function function_callers_names(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let result = [];
    let candidates = await function_name_all();
    for (let c of candidates) {
        let dependencies = await function_dependencies_non_recursive(c);
        let v_3 = function v(d) {
            let v_6 = 'function_name';
            let v_4 = object_property_get(d, v_6);
            let v_5 = equal(v_4, function_name);
            return v_5;
        };
        let v_2 = list_any(dependencies, v_3);
        if (v_2) {
            list_add(result, c);
        }
    }
    return result;
    metadata([]);
}