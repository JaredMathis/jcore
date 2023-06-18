import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { add } from '../../../../add.mjs';
import { list_get_end } from '../../../../list/get/end.mjs';
import { js_node_is } from '../../../node/is.mjs';
import { list_filter } from '../../../../list/filter.mjs';
export function js_visit_node_ancestor_generic(stack, grandparent_index, offset) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let stack_nodes = list_filter(stack, js_node_is);
    let v = add(grandparent_index, offset);
    let ancestor = list_get_end(stack_nodes, v);
    return ancestor;
}