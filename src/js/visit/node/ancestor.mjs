import { integer_value_1 } from '../../../integer/value/1.mjs';
import { js_visit_node_ancestor_generic } from './ancestor/generic.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function js_visit_node_ancestor(stack, ancestor_index) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    const offset = integer_value_1();
    let ancestor = js_visit_node_ancestor_generic(stack, ancestor_index, offset);
    return ancestor;
}