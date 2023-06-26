import { metadata } from '../../../../../metadata.mjs';
import { js_node_assign_and_replace } from '../../../../../js/node/assign/and/replace.mjs';
import { js_visit_stack_reversed_to_ancestor_list } from '../../../../../js/visit/stack/reversed/to/ancestor/list.mjs';
import { list_reversed_get } from '../../../../../list/reversed/get.mjs';
import { js_node_property_test_get } from '../../../../../js/node/property/test/get.mjs';
import { function_names_each_map } from '../../../../../function/names/each/map.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_node_is_if_statement } from '../../../../../js/node/is/if/statement.mjs';
import { js_node_is_identifier } from '../../../../../js/node/is/identifier.mjs';
import { js_visit_nodes_filter } from '../../../../../js/visit/nodes/filter.mjs';
import { list_index_before } from '../../../../../list/index/before.mjs';
import { list_get } from '../../../../../list/get.mjs';
import { assert } from '../../../../../assert.mjs';
import { result_property_success_get } from '../../../../../result/property/success/get.mjs';
import { result_property_data_get } from '../../../../../result/property/data/get.mjs';
export async function rule_if_statement_arguments_are_identifiers() {
    arguments_assert(arguments, []);
    await function_names_each_map(function v_3(args) {
        let {parsed, file_path} = args;
        js_visit_nodes_filter(parsed, js_node_is_if_statement, function v_4(v) {
            let {node, stack} = v;
            let test = js_node_property_test_get(node);
            let v_2 = js_node_is_identifier(test);
            if (v_2) {
                return;
            }
            let stack_reversed = list_reversed_get(stack);
            let ancestor_list_result = js_visit_stack_reversed_to_ancestor_list(stack_reversed);
            assert(result_property_success_get(ancestor_list_result));
            let ancestor_list = result_property_data_get(ancestor_list_result);
            let add_assignment_before_node_index = list_index_before(stack_reversed, ancestor_list);
            let add_assignment_before_node = list_get(stack_reversed, add_assignment_before_node_index);
            js_node_assign_and_replace(parsed, test, ancestor_list, add_assignment_before_node);
        });
    });
    metadata([]);
}