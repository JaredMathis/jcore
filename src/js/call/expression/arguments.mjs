import { js_node_property_arguments } from '../../node/property/arguments.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
export function js_call_expression_arguments(node) {
    return object_property_get(node, js_node_property_arguments());
}