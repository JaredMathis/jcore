import { object_property_get } from '../../../object/property/get.mjs';
export function list_add_property_generic(object, property_name, la, list) {
    let property_value = object_property_get(object, property_name);
    la(list, property_value);
}