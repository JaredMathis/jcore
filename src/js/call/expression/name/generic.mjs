import { js_if_identifier_then_name_or_null } from '../../../if/identifier/then/name/or/null.mjs';
import { js_node_property_callee } from '../../../node/property/callee.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { boolean_is } from '../../../../boolean/is.mjs';
import { js_node_is_call_expression } from '../../../node/is/call/expression.mjs';
export function js_call_expression_name_generic(ce, or_null) {
    arguments_assert(arguments, [
        js_node_is_call_expression,
        boolean_is
    ]);
    const property_name = js_node_property_callee();
    let v = js_if_identifier_then_name_or_null(ce, property_name, or_null);
    return v;
    metadata([]);
}