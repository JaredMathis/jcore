import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_node_is_type } from '../type.mjs';
export function js_node_is_return_statement(node) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v_2 = 'ReturnStatement';
    let v = js_node_is_type(node, v_2);
    return v;
    metadata([]);
}