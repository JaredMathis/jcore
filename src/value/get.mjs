import { object_property_get } from '../object/property/get.mjs';
export function value_get(value_object) {
    let value = object_property_get(value_object, 'value');
    return value;
}