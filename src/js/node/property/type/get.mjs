import { js_node_property_type } from '../type.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
export function js_node_property_type_get(node) {
    return object_property_get(node, js_node_property_type());
}