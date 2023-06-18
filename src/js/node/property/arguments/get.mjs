import { defined_is } from '../../../../defined/is.mjs';
import { js_node_property_arguments } from '../arguments.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function js_node_property_arguments_get(js_node) {
    arguments_assert(arguments, [defined_is]);
    let v = js_node_property_arguments();
    let v_2 = object_property_get(js_node, v);
    return v_2;
}