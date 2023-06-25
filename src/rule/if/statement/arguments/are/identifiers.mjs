import { js_node_assign_and_replace } from '../../../../../js/node/assign/and/replace.mjs';
import { js_visit_stack_reversed_to_ancestor_list } from '../../../../../js/visit/stack/reversed/to/ancestor/list.mjs';
import { list_reversed_get } from '../../../../../list/reversed/get.mjs';
import { js_node_property_test_get } from '../../../../../js/node/property/test/get.mjs';
import { function_names_each_map } from '../../../../../function/names/each/map.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_node_is_if_statement } from '../../../../../js/node/is/if/statement.mjs';
import { js_node_is_identifier } from '../../../../../js/node/is/identifier.mjs';
import { js_visit_nodes_filter } from '../../../../../js/visit/nodes/filter.mjs';
export async function rule_if_statement_arguments_are_identifiers() {
    arguments_assert(arguments, []);
    await function_names_each_map(args => {
        let {parsed} = args;
        js_visit_nodes_filter(parsed, js_node_is_if_statement, v => {
            let {node, stack} = v;
            let test = js_node_property_test_get(node);
            if (js_node_is_identifier(test)) {
                return;
            }
            let stack_reversed = list_reversed_get(refactor_stack);
            let ancestor_list = js_visit_stack_reversed_to_ancestor_list(stack_reversed);
            js_node_assign_and_replace(parsed, expression_to_replace, ancestor_list, add_assignment_before_node);
        });
    });
}