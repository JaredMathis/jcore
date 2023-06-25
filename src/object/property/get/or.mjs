import { metadata } from '../../../metadata.mjs';
import { object_property_exists } from '../exists.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { object_property_get } from '../get.mjs';
export function object_property_get_or(object, property_name, or_value) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v_2 = object_property_exists(object, property_name);
    if (v_2) {
        let v = object_property_get(object, property_name);
        return v;
    }
    return or_value;
    metadata([]);
}