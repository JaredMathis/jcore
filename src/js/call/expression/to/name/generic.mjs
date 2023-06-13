import { js_identifier_name } from '../../../../identifier/name.mjs';
import { js_node_property_callee } from '../../../../node/property/callee.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { object_property_get } from '../../../../../object/property/get.mjs';
import { js_node_is_identifier } from '../../../../node/is/identifier.mjs';
import { boolean_is } from '../../../../../boolean/is.mjs';
import { js_node_is_call_expression } from '../../../../node/is/call/expression.mjs';
export function js_call_expression_to_name_generic(ce, or_null) {
    arguments_assert(arguments, [
        js_node_is_call_expression,
        boolean_is
    ]);
    const property_name = js_node_property_callee();
    let callee = object_property_get(ce, property_name);
    if (or_null) {
        if (!js_node_is_identifier(callee)) {
            return null;
        }
    }
    let name = js_identifier_name(callee);
    return name;
    metadata([]);
}