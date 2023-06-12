import { js_node_call_expression_name_equal } from '../../name/equal.mjs';
import { defined_is } from '../../../../../../defined/is.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { js_call_expression_to_name_or_null } from '../../../../../call/expression/to/name/or/null.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { equal } from '../../../../../../equal.mjs';
import { js_node_is_call_expression } from '../../../../is/call/expression.mjs';
import { js_node_is } from '../../../../is.mjs';
import { function_is } from '../../../../../../function/is.mjs';
export function js_node_call_expression_if_name_equal(node, name_expected, on_name_equal) {
    arguments_assert(arguments, [
        js_node_is,
        defined_is,
        function_is
    ]);
    if (false) {
        js_node_call_expression_name_equal;
    }
    if (js_node_is_call_expression(node)) {
        let name_actual = js_call_expression_to_name_or_null(node);
        if (name_actual != null) {
            if (equal(name_actual, name_expected)) {
                on_name_equal();
            }
        }
    }
    metadata([]);
}