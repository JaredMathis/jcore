import { js_call_expression_name_get } from '../../../../../js/call/expression/name/get.mjs';
import { js_node_property_arguments_get } from '../../../../../js/node/property/arguments/get.mjs';
import { js_nodes_each } from '../../../../../js/nodes/each.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { function_names_each } from '../../../../../function/names/each.mjs';
import { js_node_is_call_expression } from '../../../../../js/node/is/call/expression.mjs';
import { list_all } from '../../../../../list/all.mjs';
import { js_node_is_identifier } from '../../../../../js/node/is/identifier.mjs';
import { assert_message } from '../../../../../assert/message.mjs';
import { equal } from '../../../../../equal.mjs';
import { function_name_get } from '../../../../../function/name/get.mjs';
export async function rule_function_call_arguments_are_identifiers() {
    arguments_assert(arguments, []);
    await function_names_each(args => {
        let {parsed} = args;
        let {file_path} = args;
        js_nodes_each(parsed, js_node_is_call_expression, node => {
            let name = js_call_expression_name_get(node);
            if (equal(name, function_name_get(arguments_assert))) {
                return;
            }
            let args = js_node_property_arguments_get(node);
            assert_message(list_all(args, js_node_is_identifier), file_path);
        });
    });
}