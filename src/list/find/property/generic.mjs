import { list_filter } from '../../filter.mjs';
import { object_property_get } from '../../../object/property/get.mjs';
import { list_find_generic } from '../generic.mjs';
export function list_find_property_generic(list, property_name, property_value, or_null) {
    return list_find_generic(list, i => object_property_get(i, property_name) === property_value, or_null, true, list_filter);
}