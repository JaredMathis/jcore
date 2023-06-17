import { js_visit_node_ancestor } from './ancestor.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function js_visit_node_grandparent(stack, grandparent_index) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    const offset = 2;
    let grandparent = js_visit_node_ancestor(stack, grandparent_index, offset);
    return grandparent;
}