import { equal } from '../../../../../equal.mjs';
import { list_any } from '../../../../../list/any.mjs';
import { function_name_get } from '../../../../../function/name/get.mjs';
import { list_map } from '../../../../../list/map.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_call_expression_name_get } from '../../../../../js/call/expression/name/get.mjs';
import { js_node_is_call_expression } from '../../../../../js/node/is/call/expression.mjs';
export function refactor_call_arguments_to_assignments_skip(node) {
    arguments_assert(arguments, [js_node_is_call_expression]);
    let name = js_call_expression_name_get(node);
    const rule_exceptions = [
        arguments_assert,
        metadata
    ];
    let rule_exceptions_names = list_map(rule_exceptions, function_name_get);
    const skip = list_any(rule_exceptions_names, e => equal(e, name));
    return skip;
}