import { js_node_is_identifier } from '../../../node/is/identifier.mjs';
import { assert } from '../../../../assert.mjs';
import { object_property_get } from '../../../../object/property/get.mjs';
export function js_function_declaration_to_name(f) {
    let id = object_property_get(f, 'id');
    assert(js_node_is_identifier(id));
    let name = object_property_get(id, 'name');
    return name;
}