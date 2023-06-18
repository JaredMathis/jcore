import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_node_is_type } from '../type.mjs';
export function js_node_is_object_pattern(node) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = js_node_is_type(node, 'ObjectPattern');
    return v;
}