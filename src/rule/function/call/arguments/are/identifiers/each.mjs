import { js_node_is_identifier } from '../../../../../../js/node/is/identifier.mjs';
import { list_all } from '../../../../../../list/all.mjs';
import { assert_message } from '../../../../../../assert/message.mjs';
import { js_node_property_arguments_get } from '../../../../../../js/node/property/arguments/get.mjs';
import { equal } from '../../../../../../equal.mjs';
import { list_any } from '../../../../../../list/any.mjs';
import { function_name_get } from '../../../../../../function/name/get.mjs';
import { list_map } from '../../../../../../list/map.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { js_call_expression_name_get } from '../../../../../../js/call/expression/name/get.mjs';
import { js_node_is_call_expression } from '../../../../../../js/node/is/call/expression.mjs';
import { js_nodes_each } from '../../../../../../js/nodes/each.mjs';
export function rule_function_call_arguments_are_identifiers_each(args) {
    let {parsed} = args;
    let {file_path} = args;
    js_nodes_each(parsed, js_node_is_call_expression, node => {
        let name = js_call_expression_name_get(node);
        const rule_exceptions = [
            arguments_assert,
            metadata
        ];
        let rule_exceptions_names = list_map(rule_exceptions, function_name_get);
        if (list_any(rule_exceptions_names, e => equal(e, name))) {
            return;
        }
        let args = js_node_property_arguments_get(node);
        assert_message(list_all(args, js_node_is_identifier), file_path);
    });
}