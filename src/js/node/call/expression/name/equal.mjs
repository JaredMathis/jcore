import { boolean_value_false } from '../../../../../boolean/value/false.mjs';
import { boolean_value_true } from '../../../../../boolean/value/true.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { equal } from '../../../../../equal.mjs';
import { js_call_expression_name_get_or_null } from '../../../../call/expression/name/get/or/null.mjs';
import { js_node_is_call_expression } from '../../../is/call/expression.mjs';
import { defined_is } from '../../../../../defined/is.mjs';
import { js_node_is } from '../../../is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function js_node_call_expression_name_equal(node, name_expected) {
    arguments_assert(arguments, [
        js_node_is,
        defined_is
    ]);
    let v = js_node_is_call_expression(node);
    if (v) {
        let name_actual = js_call_expression_name_get_or_null(node);
        let v_2 = name_actual != null;
        if (v_2) {
            let v_3 = equal(name_actual, name_expected);
            if (v_3) {
                let v_4 = boolean_value_true();
                return v_4;
            }
        }
    }
    let v_5 = boolean_value_false();
    return v_5;
    metadata([]);
}