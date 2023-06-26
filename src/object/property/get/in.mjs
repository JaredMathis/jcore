import { object_property_in } from '../in.mjs';
import { metadata } from '../../../metadata.mjs';
import { object_property_get_generic } from './generic.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function object_property_get_in(object, property_name) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let lambda = object_property_in;
    let v = object_property_get_generic(lambda, object, property_name);
    return v;
    metadata([]);
}