import { object_property_set } from '../object/property/set.mjs';
export function value_get() {
    let set = object_property_set(value_object, 'set');
    return set;
}