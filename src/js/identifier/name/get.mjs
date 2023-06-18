import { object_property_get } from '../../../object/property/get.mjs';
import { js_node_is_identifier } from '../../node/is/identifier.mjs';
import { assert } from '../../../assert.mjs';
export function js_identifier_name_get(identifier) {
    let v = js_node_is_identifier(identifier);
    assert(v);
    let name = object_property_get(identifier, 'name');
    return name;
}