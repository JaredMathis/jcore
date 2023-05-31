import { object_property_set } from '../../../object/property/set.mjs';
import { js_id_get } from '../get.mjs';
export function js_id_name_set(fd, value) {
    let id = js_id_get(fd);
    let name = object_property_set(id, 'name', value);
    return name;
}