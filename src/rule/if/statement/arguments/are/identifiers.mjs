import { log } from '../../../../../log.mjs';
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
import { js_unparse } from '../../../../../js/unparse.mjs';
import { error } from '../../../../../error.mjs';
export async function rule_if_statement_arguments_are_identifiers() {
    arguments_assert(arguments, []);
    await function_names_each_map(args => {
        let {parsed, file_path} = args;
        js_visit_nodes_filter(parsed, js_node_is_if_statement, v => {
            let {node, stack} = v;
            let test = js_node_property_test_get(node);
            if (js_node_is_identifier(test)) {
                return;
            }
            let stack_reversed = list_reversed_get(stack);
            let ancestor_list = js_visit_stack_reversed_to_ancestor_list(stack_reversed);
            let add_assignment_before_node_index = list_index_before(stack_reversed, ancestor_list);
            let add_assignment_before_node = list_get(stack_reversed, add_assignment_before_node_index);
            js_node_assign_and_replace(parsed, node, ancestor_list, add_assignment_before_node);
        });
        console.log(js_unparse(parsed));
        error(file_path);
    });
}