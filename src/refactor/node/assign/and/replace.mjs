import { js_visit_stack_reversed_to_ancestor_list_assert } from '../../../../js/visit/stack/reversed/to/ancestor/list/assert.mjs';
import { function_is } from '../../../../function/is.mjs';
import { metadata } from '../../../../metadata.mjs';
import { list_get } from '../../../../list/get.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_visit_nodes_filter } from '../../../../js/visit/nodes/filter.mjs';
import { js_node_assign_and_replace } from '../../../../js/node/assign/and/replace.mjs';
import { list_reversed_get } from '../../../../list/reversed/get.mjs';
import { list_index_before } from '../../../../list/index/before.mjs';
export function refactor_node_assign_and_replace(args, lambda_node_is_type, lambda_children_get) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        function_is
    ]);
    let {parsed} = args;
    let v_4 = function v_3(v) {
        let {node, stack} = v;
        let stack_reversed = list_reversed_get(stack);
        let ancestor_list = js_visit_stack_reversed_to_ancestor_list_assert(stack_reversed);
        let add_assignment_before_node_index = list_index_before(stack_reversed, ancestor_list);
        let add_assignment_before_node = list_get(stack_reversed, add_assignment_before_node_index);
        let children = lambda_children_get(node);
        for (let child of children) {
            js_node_assign_and_replace(parsed, child, ancestor_list, add_assignment_before_node);
        }
    };
    js_visit_nodes_filter(parsed, lambda_node_is_type, v_4);
    metadata([]);
}