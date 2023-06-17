import { js_node_property_operator } from '../operator.mjs';
import { defined_is } from '../../../../defined/is.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export function js_node_property_operator_get(js_node) {
    arguments_assert(arguments, [defined_is]);
    return object_property_get(js_node, js_node_property_operator());
}