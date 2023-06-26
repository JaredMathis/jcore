import { metadata } from '../../../../metadata.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { equal } from '../../../../equal.mjs';
import { js_node_is } from '../../is.mjs';
import { js_node_property_type_get } from '../../property/type/get.mjs';
export function js_node_is_unary_expression(node) {
    arguments_assert(arguments, [js_node_is]);
    let v = js_node_property_type_get(node);
    let v_3 = 'UnaryExpression';
    let v_2 = equal(v, v_3);
    return v_2;
    metadata([]);
}