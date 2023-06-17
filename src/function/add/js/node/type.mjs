import { function_add_string_prefix_camel_generic } from '../../string/prefix/camel/generic.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { comment } from '../../../../comment.mjs';
export async function function_add_js_node_type(value) {
    arguments_assert(arguments, [arguments_assert_todo]);
    comment('this needs to add js_node_is_* as well');
    let prefix = 'js_node_type';
    return await function_add_string_prefix_camel_generic(prefix, value);
}