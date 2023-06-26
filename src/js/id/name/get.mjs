import { js_node_is } from '../../node/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_id_get } from '../get.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
export function js_id_name_get(fd) {
    arguments_assert(arguments, [js_node_is]);
    let id = js_id_get(fd);
    let v = 'name';
    let name = object_property_get(id, v);
    return name;
    metadata([]);
}