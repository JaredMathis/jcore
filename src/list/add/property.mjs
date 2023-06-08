import { list_add } from '../add.mjs';
import { object_property_get } from '../../object/property/get.mjs';
export function list_add_property(list, object, property_name) {
    let property_value = object_property_get(object, property_name);
    list_add(list, property_value);
}