import { refactor_import_fix_if_changed } from '../../../import/fix/if/changed.mjs';
import { object_replace } from '../../../../object/replace.mjs';
import { js_node_property_arguments_get } from '../../../../js/node/property/arguments/get.mjs';
import { not } from '../../../../not.mjs';
import { js_parse_call_expression } from '../../../../js/parse/call/expression.mjs';
import { js_node_property_argument_get } from '../../../../js/node/property/argument/get.mjs';
import { js_token_exclamation } from '../../../../js/token/exclamation.mjs';
import { js_node_property_operator_get } from '../../../../js/node/property/operator/get.mjs';
import { js_node_is_unary_expression } from '../../../../js/node/is/unary/expression.mjs';
import { js_nodes_each } from '../../../../js/nodes/each.mjs';
import { metadata } from '../../../../metadata.mjs';
import { function_names_each_map } from '../../../../function/names/each/map.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { equal } from '../../../../equal.mjs';
import { function_name_get } from '../../../../function/name/get.mjs';
import { list_add } from '../../../../list/add.mjs';
export async function refactor_functions_exclamation_to_not() {
    arguments_assert(arguments, []);
    let v_5 = async function logic(args) {
        let v_6 = function v_2(change) {
            let {parsed} = args;
            let v_7 = function v_3(n) {
                let operator = js_node_property_operator_get(n);
                let v_8 = js_token_exclamation();
                let v_4 = equal(operator, v_8);
                if (v_4) {
                    let argument = js_node_property_argument_get(n);
                    let v = function_name_get(not);
                    let call_expression = js_parse_call_expression(v);
                    let args = js_node_property_arguments_get(call_expression);
                    list_add(args, argument);
                    object_replace(n, call_expression);
                    change();
                }
            };
            js_nodes_each(parsed, js_node_is_unary_expression, v_7);
        };
        await refactor_import_fix_if_changed(args, v_6);
    };
    await function_names_each_map(v_5);
    metadata([]);
}