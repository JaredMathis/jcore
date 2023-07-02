import { object_property_get } from '../../object/property/get.mjs';
import { equal_by } from '../by.mjs';
export function equal_by_property(property_name, a, a_2) {
    return equal_by(function v(b) {
        return object_property_get(b, property_name);
    }, a, a_2);
}