import { metadata } from '../../../../metadata.mjs';
import { list_get } from '../../../../list/get.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { js_visit_nodes_filter } from '../../../../js/visit/nodes/filter.mjs';
import { js_node_assign_and_replace } from '../../../../js/node/assign/and/replace.mjs';
import { result_property_data_get } from '../../../../result/property/data/get.mjs';
import { assert } from '../../../../assert.mjs';
import { result_property_success_get } from '../../../../result/property/success/get.mjs';
import { js_visit_stack_reversed_to_ancestor_list } from '../../../../js/visit/stack/reversed/to/ancestor/list.mjs';
import { list_reversed_get } from '../../../../list/reversed/get.mjs';
import { list_index_before } from '../../../../list/index/before.mjs';
export function refactor_node_assign_and_replace(args, lambda_node_is_type, lambda_children_get) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let {parsed} = args;
    let v_4 = function v_3(v) {
        let {node, stack} = v;
        let stack_reversed = list_reversed_get(stack);
        let r = js_visit_stack_reversed_to_ancestor_list(stack_reversed);
        let v_2 = result_property_success_get(r);
        assert(v_2);
        let ancestor_list = result_property_data_get(r);
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