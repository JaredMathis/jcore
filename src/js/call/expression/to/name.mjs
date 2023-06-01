import { object_property_get } from '../../../../object/property/get.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_node_identifer_by_name_get } from '../../../node/identifer/by/name/get.mjs';
import { assert } from '../../../../assert.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { node_is_type_call_expression } from '../../../../node/is/type/call/expression.mjs';
import { js_node_is_identifier } from '../../../node/is/identifier.mjs';
export function js_call_expression_to_name(ce) {
    arguments_assert(arguments, [node_is_type_call_expression]);
    let temp = false;
    let callee = js_node_identifer_by_name_get(ce, 'callee');
    if (temp) {
        if (!js_node_is_identifier(callee)) {
            return;
        }
    }
    assert(js_node_is_identifier(callee));
    let name = object_property_get(callee, 'name');
    return name;
    metadata([]);
}