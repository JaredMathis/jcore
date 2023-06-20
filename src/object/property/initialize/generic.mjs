import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { object_property_initialize } from '../initialize.mjs';
import { equal } from '../../../equal.mjs';
import { assert } from '../../../assert.mjs';
import { object_property_get } from '../get.mjs';
import { object_property_exists } from '../exists.mjs';
export function object_property_initialize_generic(object, property_name, initial_value, ensure) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    if (object_property_exists(object, property_name)) {
        if (ensure) {
            let existing = object_property_get(object, property_name);
            let v = equal(existing, initial_value);
            assert(v);
        }
    } else {
        object_property_initialize(object, property_name, initial_value);
    }
}