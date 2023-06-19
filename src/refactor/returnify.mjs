import { js_visit_stack_to_ancestor_list } from '../js/visit/stack/to/ancestor/list.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { js_visit_nodes_filter } from '../js/visit/nodes/filter.mjs';
import { js_node_is_return_statement } from '../js/node/is/return/statement.mjs';
import { assert } from '../assert.mjs';
import { result_property_data_get } from '../result/property/data/get.mjs';
import { result_property_success_get } from '../result/property/success/get.mjs';
import { list_reversed_get } from '../list/reversed/get.mjs';
export function refactor_returnify(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {parsed} = args;
    js_visit_nodes_filter(parsed, js_node_is_return_statement, v => {
        let {node, stack} = v;
        let stack_reversed = list_reversed_get(stack);
        let r = js_visit_stack_to_ancestor_list(stack_reversed, lambda);
        assert(result_property_success_get(r));
        let ancestor_list = result_property_data_get(r);
    });
}