import { object_property_set } from '../../object/property/set.mjs';
export function value_set_is(value_object) {
    let set = object_property_get(value_object, 'set');
    return set;
}