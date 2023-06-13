import { object_property_get } from '../../object/property/get.mjs';
import { js_node_is_identifier } from '../node/is/identifier.mjs';
import { assert } from '../../assert.mjs';
export function js_identifier_name(callee) {
    assert(js_node_is_identifier(callee));
    let name = object_property_get(callee, 'name');
    return name;
}