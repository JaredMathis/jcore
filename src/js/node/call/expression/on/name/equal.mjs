import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { function_name_get } from '../../../../../../function/name/get.mjs';
import { equal } from '../../../../../../equal.mjs';
import { js_call_expression_to_name } from '../../../../../call/expression/to/name.mjs';
import { node_is_type_call_expression } from '../../../../../../node/is/type/call/expression.mjs';
export function js_node_call_expression_on_name_equal(node, on_name_equal) {
    if (node_is_type_call_expression(node)) {
        let name_actual = js_call_expression_to_name(node);
        if (equal(name_actual, function_name_get(arguments_assert))) {
            on_name_equal();
        }
    }
}