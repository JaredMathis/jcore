import { js_node_property_test_get } from '../../../../../js/node/property/test/get.mjs';
import { function_names_each_map } from '../../../../../function/names/each/map.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_nodes_each } from '../../../../../js/nodes/each.mjs';
import { js_node_is_if_statement } from '../../../../../js/node/is/if/statement.mjs';
import { js_node_is_identifier } from '../../../../../js/node/is/identifier.mjs';
export async function rule_if_statement_arguments_are_identifiers() {
    arguments_assert(arguments, []);
    await function_names_each_map(args => {
        let {parsed} = args;
        js_nodes_each(parsed, js_node_is_if_statement, node => {
            let test = js_node_property_test_get(node);
            if (js_node_is_identifier(test)) {
                return;
            }
            js_node_assign_and_replace(parsed, expression_to_replace, ancestor_list, add_assignment_before_node);
        });
    });
}