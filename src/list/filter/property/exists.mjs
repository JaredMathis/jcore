import { object_property_exists } from '../../../object/property/exists.mjs';
import { list_filter } from '../../filter.mjs';
export function list_filter_property_exists(list, property_name) {
    let v = list_filter(list, m => object_property_exists(m, property_name));
    return v;
}