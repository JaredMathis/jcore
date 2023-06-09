import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { object_property_exists } from '../../../object/property/exists.mjs';
import { list_filter } from '../../filter.mjs';
export function list_filter_property_exists(list, property_name) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v_4 = function v_2(m) {
        let v_3 = object_property_exists(m, property_name);
        return v_3;
    };
    let v = list_filter(list, v_4);
    return v;
    metadata([]);
}