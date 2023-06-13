import { function_add_string_prefix_camel_generic } from '../../string/prefix/camel/generic.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function function_add_js_node_type(value) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let prefix = 'js_node_is';
    await function_add_string_prefix_camel_generic(prefix, value);
}