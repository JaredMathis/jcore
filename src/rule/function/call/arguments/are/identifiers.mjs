import { js_node_property_arguments_get } from '../../../../../js/node/property/arguments/get.mjs';
import { js_nodes_each } from '../../../../../js/nodes/each.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { function_names_each } from '../../../../../function/names/each.mjs';
import { js_node_is_call_expression } from '../../../../../js/node/is/call/expression.mjs';
import { assert } from '../../../../../assert.mjs';
import { list_all } from '../../../../../list/all.mjs';
import { js_node_is_identifier } from '../../../../../js/node/is/identifier.mjs';
export async function rule_function_call_arguments_are_identifiers() {
    arguments_assert(arguments, []);
    await function_names_each(args => {
        let {parsed} = args;
        js_nodes_each(parsed, js_node_is_call_expression, node => {
            let args = js_node_property_arguments_get(node);
            assert(list_all(args, js_node_is_identifier));
        });
    });
}