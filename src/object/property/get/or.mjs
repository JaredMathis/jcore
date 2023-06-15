import { metadata } from '../../../metadata.mjs';
import { object_property_exists } from '../exists.mjs';
import { assert } from '../../../assert.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function object_property_get_or(object, property_name) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    assert(object_property_exists(object, property_name));
    return object[property_name];
    metadata([]);
}