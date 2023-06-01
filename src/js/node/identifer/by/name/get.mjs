import { metadata } from '../../../../../metadata.mjs';
import { js_node_is_identifier } from '../../../is/identifier.mjs';
import { assert } from '../../../../../assert.mjs';
import { object_property_get } from '../../../../../object/property/get.mjs';
export function js_node_identifer_by_name_get(node, node_identifier_name) {
    let id = object_property_get(node, node_identifier_name);
    console.log({fd: node,node_identifier_name,id})
    assert(js_node_is_identifier(id));
    return id;
    metadata([]);
}