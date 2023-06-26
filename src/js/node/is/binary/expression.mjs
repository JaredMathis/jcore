import { metadata } from '../../../../metadata.mjs';
import { defined_is } from '../../../../defined/is.mjs';
import { js_node_type_binary_expression } from '../../type/binary/expression.mjs';
import { js_node_is_type } from '../type.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function js_node_is_binary_expression(value) {
    arguments_assert(arguments, [defined_is]);
    let v = js_node_type_binary_expression();
    let v_2 = js_node_is_type(value, v);
    return v_2;
    metadata([]);
}