import { metadata } from '../../../metadata.mjs';
import { js_id_get } from '../get.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
export function js_id_name_get(fd) {
    let id = js_id_get(fd);
    let name = object_property_get(id, 'name');
    return name;
    metadata([]);
}