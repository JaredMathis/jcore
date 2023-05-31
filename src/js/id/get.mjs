import { metadata } from '../../metadata.mjs';
import { js_node_is_identifier } from '../node/is/identifier.mjs';
import { assert } from '../../assert.mjs';
import { object_property_get } from '../../object/property/get.mjs';
export function js_id_get(fd) {
    let id = object_property_get(fd, 'id');
    assert(js_node_is_identifier(id));
    return id;
    metadata([]);
}