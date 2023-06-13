import { function_add_string_prefix_generic } from './generic.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function function_add_string_prefix_camel(prefix, suffix) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let value = suffix;
    await function_add_string_prefix_generic(prefix, suffix, value);
}