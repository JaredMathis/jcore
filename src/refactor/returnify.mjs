import { metadata } from '../metadata.mjs';
import { js_visit_stack_reversed_to_ancestor_list } from '../js/visit/stack/reversed/to/ancestor/list.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { js_visit_nodes_filter } from '../js/visit/nodes/filter.mjs';
import { js_node_is_return_statement } from '../js/node/is/return/statement.mjs';
import { assert } from '../assert.mjs';
import { result_property_data_get } from '../result/property/data/get.mjs';
import { result_property_success_get } from '../result/property/success/get.mjs';
import { list_reversed_get } from '../list/reversed/get.mjs';
import { js_node_assign_and_replace } from '../js/node/assign/and/replace.mjs';
import { js_node_property_argument_get } from '../js/node/property/argument/get.mjs';
export function refactor_returnify(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {parsed} = args;
    let v_4 = function v_3(v) {
        let {node, stack} = v;
        let stack_reversed = list_reversed_get(stack);
        let r = js_visit_stack_reversed_to_ancestor_list(stack_reversed);
        let v_2 = result_property_success_get(r);
        assert(v_2);
        let ancestor_list = result_property_data_get(r);
        let argument = js_node_property_argument_get(node);
        js_node_assign_and_replace(parsed, argument, ancestor_list, node);
    };
    js_visit_nodes_filter(parsed, js_node_is_return_statement, v_4);
    metadata([]);
}