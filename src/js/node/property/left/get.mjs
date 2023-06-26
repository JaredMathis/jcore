import { defined_is } from '../../../../defined/is.mjs';
import { js_node_property_left } from '../left.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function js_node_property_left_get(js_node) {
    arguments_assert(arguments, [defined_is]);
    let v = js_node_property_left();
    let v_2 = object_property_get(js_node, v);
    return v_2;
}