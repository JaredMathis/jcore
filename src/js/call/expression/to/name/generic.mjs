import { tautology } from '../../../../../tautology.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { object_property_get } from '../../../../../object/property/get.mjs';
import { assert } from '../../../../../assert.mjs';
import { js_node_is_identifier } from '../../../../node/is/identifier.mjs';
import { boolean_is } from '../../../../../boolean/is.mjs';
export function js_call_expression_to_name_generic(ce, or_null) {
    arguments_assert(arguments, [
        tautology,
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