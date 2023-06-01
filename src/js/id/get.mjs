import { metadata } from '../../metadata.mjs';
import { js_node_is_identifier } from '../node/is/identifier.mjs';
import { assert } from '../../assert.mjs';
import { object_property_get } from '../../object/property/get.mjs';
export function js_id_get(fd) {
    const node_identifier_name = 'id';
    let id = js_node_identifer_by_name_get(fd, node_identifier_name);
    return id;
    metadata([]);
}

function js_node_identifer_by_name_get(fd, node_identifier_name) {
    let id = object_property_get(fd, node_identifier_name);
    assert(js_node_is_identifier(id));
    return id;
}
