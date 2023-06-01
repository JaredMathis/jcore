import { js_call_expression_to_name_or_null } from '../../../../../call/expression/to/name/or/null.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { equal } from '../../../../../../equal.mjs';
import { node_is_type_call_expression } from '../../../../../../node/is/type/call/expression.mjs';
export function js_node_call_expression_if_name_equal(node, name_expected, on_name_equal) {
    if (node_is_type_call_expression(node)) {
        let name_actual = js_call_expression_to_name_or_null(node);
        if (equal(name_actual, name_expected)) {
            on_name_equal();
        }
    }
    metadata([]);
}