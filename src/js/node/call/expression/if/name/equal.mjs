import { js_node_call_expression_name_equal } from '../../name/equal.mjs';
import { defined_is } from '../../../../../../defined/is.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { js_node_is } from '../../../../is.mjs';
import { function_is } from '../../../../../../function/is.mjs';
export function js_node_call_expression_if_name_equal(node, name_expected, on_name_equal) {
    arguments_assert(arguments, [
        js_node_is,
        defined_is,
        function_is
    ]);
    let v = js_node_call_expression_name_equal(node, name_expected);
    if (v) {
        on_name_equal();
    }
    metadata([]);
}