import { object_property_get } from '../../object/property/get.mjs';
import { list_map } from '../map.mjs';
export function list_map_property(list, property_name) {
    let v = list_map(list, element => object_property_get(element, property_name));
    return v;
}