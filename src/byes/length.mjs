import { object_property_get_in } from '../object/property/get/in.mjs';
export function byes_length(data) {
    return object_property_get_in(data, 'length');
}