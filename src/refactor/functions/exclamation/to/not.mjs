import { not } from '../../../../not.mjs';
import { js_parse_call_expression } from '../../../../js/parse/call/expression.mjs';
import { js_node_property_argument_get } from '../../../../js/node/property/argument/get.mjs';
import { js_token_exclamation } from '../../../../js/token/exclamation.mjs';
import { js_node_property_operator_get } from '../../../../js/node/property/operator/get.mjs';
import { js_node_is_unary_expression } from '../../../../js/node/is/unary/expression.mjs';
import { js_nodes_each } from '../../../../js/nodes/each.mjs';
import { metadata } from '../../../../metadata.mjs';
import { file_js_all_map_args_if_function } from '../../../../file/js/all/map/args/if/function.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { equal } from '../../../../equal.mjs';
import { function_name_get } from '../../../../function/name/get.mjs';
export async function refactor_functions_exclamation_to_not() {
    arguments_assert(arguments, []);
    await file_js_all_map_args_if_function(async function logic(args) {
        let {parsed} = args;
        js_nodes_each(parsed, js_node_is_unary_expression, n => {
            let operator = js_node_property_operator_get(n);
            if (equal(operator, js_token_exclamation())) {
                let argument = js_node_property_argument_get(n);
                let call_expression = js_parse_call_expression(function_name_get(not));
            }
        });
    });
    metadata([]);
}