import { equal } from '../../../equal.mjs';
import { integer_value_0 } from '../../../integer/value/0.mjs';
import { list_filter } from '../../filter.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { list_find_generic } from '../generic.mjs';
export function list_find_property_generic(list, property_name, property_value, or_null) {
    let v = list_find_generic(list, function v_2(i) {
        return equal(object_property_get(i, property_name), property_value);
    }, or_null, true, list_filter, integer_value_0());
    return v;
}