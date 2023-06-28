import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { list_map } from '../map.mjs';
export function list_map_property(list, property_name) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v_4 = function v_2(element) {
        let v_3 = object_property_get(element, property_name);
        return v_3;
    };
    let v = list_map(list, v_4);
    return v;
    metadata([]);
}