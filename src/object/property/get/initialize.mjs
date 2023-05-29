import { object_property_get } from '../get.mjs';
import { object_property_initialize } from '../initialize.mjs';
export function object_property_get_initialize(data, property_name, intial_value) {
    object_property_initialize(data, property_name, intial_value);
    return object_property_get(data, property_name);
}