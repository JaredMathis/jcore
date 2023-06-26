import { metadata } from '../../../metadata.mjs';
import { function_add_string_prefix_generic } from './prefix/generic.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_add_string_prefix(prefix, suffix) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let value = suffix;
    let v = true;
    await function_add_string_prefix_generic(prefix, suffix, value, v);
    metadata([]);
}