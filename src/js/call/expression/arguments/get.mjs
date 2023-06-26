import { metadata } from '../../../../metadata.mjs';
import { js_node_property_arguments } from '../../../node/property/arguments.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
export function js_call_expression_arguments_get(node) {
    let v = js_node_property_arguments();
    let v_2 = object_property_get(node, v);
    return v_2;
    metadata([]);
}