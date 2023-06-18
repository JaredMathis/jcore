import { object_property_get } from '../../object/property/get.mjs';
import { equal } from '../../equal.mjs';
import { list_filter } from '../filter.mjs';
export function list_filter_property(mapped, property_name, property_value) {
    let v = list_filter(mapped, function v_2(m) {
        let v_3 = object_property_get(m, property_name);
        let v_4 = equal(v_3, property_value);
        return v_4;
    });
    return v;
}