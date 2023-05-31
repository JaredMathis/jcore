import { object_property_set } from '../object/property/set.mjs';
export function value_set(value_object, value) {
    object_property_set(value_object, 'value', value);
    object_property_set(value_object, 'set', true);
}