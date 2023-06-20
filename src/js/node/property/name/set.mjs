import { defined_is } from '../../../../defined/is.mjs';
import { js_node_property_name } from '../name.mjs';
import { object_property_set } from '../../../../object/property/set.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function js_node_property_name_set(js_node, value) {
    arguments_assert(arguments, [
        defined_is,
        defined_is
    ]);
    let v = js_node_property_name();
    let v_2 = object_property_set(js_node, v, value);
    return v_2;
}