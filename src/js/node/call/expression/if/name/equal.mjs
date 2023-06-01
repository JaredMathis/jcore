import { tautology } from '../../../../../../tautology.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { js_call_expression_to_name_or_null } from '../../../../../call/expression/to/name/or/null.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { equal } from '../../../../../../equal.mjs';
import { node_is_type_call_expression } from '../../../../../../node/is/type/call/expression.mjs';
export function js_node_call_expression_if_name_equal(node, name_expected, on_name_equal) {
    arguments_assert(arguments, [
        tautology,
        tautology,
        tautology
    ]);
    if (node_is_type_call_expression(node)) {
        let name_actual = js_call_expression_to_name_or_null(node);
        console.log(name_actual);
        if (name_actual != null) {
            if (equal(name_actual, name_expected)) {
                on_name_equal();
            }
        }
    }
    metadata([]);
}