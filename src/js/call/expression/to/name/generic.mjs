import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { object_property_get } from '../../../../../object/property/get.mjs';
import { assert } from '../../../../../assert.mjs';
import { js_node_is_identifier } from '../../../../node/is/identifier.mjs';
import { boolean_is } from '../../../../../boolean/is.mjs';
import { js_node_is_call_expression } from '../../../../node/is/call/expression.mjs';
export function js_call_expression_to_name_generic(ce, or_null) {
    arguments_assert(arguments, [
        js_node_is_call_expression,
        boolean_is
    ]);
    let callee = object_property_get(ce, 'callee');
    if (or_null) {
        if (!js_node_is_identifier(callee)) {
            return null;
        }
    }
    assert(js_node_is_identifier(callee));
    let name = object_property_get(callee, 'name');
    return name;
    metadata([]);
}