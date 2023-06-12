import { js_node_property_type } from '../property/type.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
export function js_node_type_get(node) {
    return object_property_get(node, js_node_property_type());
}