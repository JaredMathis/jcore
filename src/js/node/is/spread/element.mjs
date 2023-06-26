import { defined_is } from '../../../../defined/is.mjs';
import { js_node_type_spread_element } from '../../type/spread/element.mjs';
import { js_node_is_type } from '../type.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function js_node_is_spread_element(value) {
    arguments_assert(arguments, [defined_is]);
    let v = js_node_type_spread_element();
    let v_2 = js_node_is_type(value, v);
    return v_2;
}