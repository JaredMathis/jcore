import { metadata } from '../../metadata.mjs';
import { object_property_get } from '../../object/property/get.mjs';
export function function_name_get(func) {
    let v = object_property_get(func, 'name');
    return v;
    metadata([]);
}