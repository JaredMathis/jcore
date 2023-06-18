import { object_property_get } from '../../object/property/get.mjs';
import { equal } from '../../equal.mjs';
import { list_filter } from '../filter.mjs';
export function list_filter_property(mapped, property_name, property_value) {
    let v = list_filter(mapped, m => equal(object_property_get(m, property_name), property_value));
    return v;
}