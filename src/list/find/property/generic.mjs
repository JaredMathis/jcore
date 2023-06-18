import { list_filter } from '../../filter.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { list_find_generic } from '../generic.mjs';
export function list_find_property_generic(list, property_name, property_value, or_null) {
    let v = list_find_generic(list, function v_2(i) {
        return object_property_get(i, property_name) === property_value;
    }, or_null, true, list_filter, 0);
    return v;
}