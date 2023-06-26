import { js_node_property_left } from '../left.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function js_node_property_left_get() {
    arguments_assert(arguments, []);
    return object_property_get(js_node, js_node_property_left());
}