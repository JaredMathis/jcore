import { object_property_get } from '../../object/property/get.mjs';
export function function_name_get(func) {
    return object_property_get(func, 'name');
}