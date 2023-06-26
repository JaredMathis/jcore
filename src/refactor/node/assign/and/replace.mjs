import { js_visit_nodes_filter } from '../../../../js/visit/nodes/filter.mjs';
import { js_node_assign_and_replace } from '../../../../js/node/assign/and/replace.mjs';
import { result_property_data_get } from '../../../../result/property/data/get.mjs';
import { assert } from '../../../../assert.mjs';
import { result_property_success_get } from '../../../../result/property/success/get.mjs';
import { js_visit_stack_reversed_to_ancestor_list } from '../../../../js/visit/stack/reversed/to/ancestor/list.mjs';
import { list_reversed_get } from '../../../../list/reversed/get.mjs';
export function refactor_node_assign_and_replace(args, lambda_child_get, lambda_node_is_type) {
    let {parsed} = args;
    let v_4 = function v_3(v) {
        let {node, stack} = v;
        let stack_reversed = list_reversed_get(stack);
        let r = js_visit_stack_reversed_to_ancestor_list(stack_reversed);
        let v_2 = result_property_success_get(r);
        assert(v_2);
        let ancestor_list = result_property_data_get(r);
        let child = lambda_child_get(node);
        js_node_assign_and_replace(parsed, child, ancestor_list, node);
    };
    js_visit_nodes_filter(parsed, lambda_node_is_type, v_4);
}