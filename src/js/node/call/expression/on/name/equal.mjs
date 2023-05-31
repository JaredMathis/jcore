import { metadata } from '../../../../../../metadata.mjs';
import { equal } from '../../../../../../equal.mjs';
import { js_call_expression_to_name } from '../../../../../call/expression/to/name.mjs';
import { node_is_type_call_expression } from '../../../../../../node/is/type/call/expression.mjs';
export function js_node_call_expression_on_name_equal(node, name_expected, on_name_equal) {
    if (node_is_type_call_expression(node)) {
        let name_actual = js_call_expression_to_name(node);
        if (equal(name_actual, name_expected)) {
            on_name_equal();
        }
    }
    metadata([]);
}