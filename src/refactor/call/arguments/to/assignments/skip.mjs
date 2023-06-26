import { boolean_value_false } from '../../../../../boolean/value/false.mjs';
import { js_call_expression_name_get_or_null } from '../../../../../js/call/expression/name/get/or/null.mjs';
import { equal } from '../../../../../equal.mjs';
import { list_any } from '../../../../../list/any.mjs';
import { function_name_get } from '../../../../../function/name/get.mjs';
import { list_map } from '../../../../../list/map.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_node_is_call_expression } from '../../../../../js/node/is/call/expression.mjs';
import { null_is } from '../../../../../null/is.mjs';
import { comment } from '../../../../../comment.mjs';
export function refactor_call_arguments_to_assignments_skip(node) {
    arguments_assert(arguments, [js_node_is_call_expression]);
    let name = js_call_expression_name_get_or_null(node);
    if (null_is(name)) {
        let v_2 = boolean_value_false();
        return v_2;
    }
    const rule_exceptions = [
        arguments_assert,
        metadata,
        comment
    ];
    let rule_exceptions_names = list_map(rule_exceptions, function_name_get);
    let v_3 = function v(e) {
        let v_4 = equal(e, name);
        return v_4;
    };
    const skip = list_any(rule_exceptions_names, v_3);
    return skip;
    metadata([]);
}