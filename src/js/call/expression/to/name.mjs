import { object_property_get } from '../../../../object/property/get.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_node_identifer_by_name_get } from '../../../node/identifer/by/name/get.mjs';
export function js_call_expression_to_name(ce) {
    let callee = js_node_identifer_by_name_get(ce, 'callee');
    let name = object_property_get(callee, 'name');
    return name;
    metadata([]);
}