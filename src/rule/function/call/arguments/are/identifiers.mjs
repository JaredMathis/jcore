import { js_nodes_each } from '../../../../../js/nodes/each.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { function_names_each } from '../../../../../function/names/each.mjs';
import { js_node_is_call_expression } from '../../../../../js/node/is/call/expression.mjs';
export async function rule_function_call_arguments_are_identifiers() {
    arguments_assert(arguments, []);
    await function_names_each(args => {
        let {parsed} = args;
        js_nodes_each(parsed, js_node_is_call_expression, lambda);
    });
}