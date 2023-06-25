import { integer_value_2 } from '../../../integer/value/2.mjs';
import { js_visit_node_ancestor_generic } from './ancestor/generic.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function js_visit_node_grandparent(stack, grandparent_index) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    const offset = integer_value_2();
    let grandparent = js_visit_node_ancestor_generic(stack, grandparent_index, offset);
    return grandparent;
}