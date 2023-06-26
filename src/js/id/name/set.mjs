import { js_node_is } from '../../node/is.mjs';
import { string_is } from '../../../string/is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { object_property_set } from '../../../object/property/set.mjs';
import { js_id_get } from '../get.mjs';
export function js_id_name_set(fd, value) {
    arguments_assert(arguments, [
        js_node_is,
        string_is
    ]);
    let id = js_id_get(fd);
    let v = 'name';
    let name = object_property_set(id, v, value);
    return name;
    metadata([]);
}