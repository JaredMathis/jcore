import { equal } from '../../../equal.mjs';
import { integer_value_0 } from '../../../integer/value/0.mjs';
import { list_filter } from '../../filter.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { list_find_generic } from '../generic.mjs';
export function list_find_property_generic(list, property_name, property_value, or_null) {
    let v_3 = function v_2(i) {
        let v_6 = object_property_get(i, property_name);
        let v_7 = equal(v_6, property_value);
        return v_7;
    };
    let v_4 = true;
    let v_5 = integer_value_0();
    let v = list_find_generic(list, v_3, or_null, v_4, list_filter, v_5);
    return v;
}