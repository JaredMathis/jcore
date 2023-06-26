import { metadata } from '../../../../metadata.mjs';
import { function_add_string_prefix_camel_generic } from './camel/generic.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function function_add_string_prefix_camel(prefix, value) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v = true;
    await function_add_string_prefix_camel_generic(prefix, value, v);
    metadata([]);
}