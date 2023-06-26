import { metadata } from '../../metadata.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { list_map } from '../map.mjs';
export function list_map_property(list, property_name) {
    let v_4 = function v_2(element) {
        let v_3 = object_property_get(element, property_name);
        return v_3;
    };
    let v = list_map(list, v_4);
    return v;
    metadata([]);
}