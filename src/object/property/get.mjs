import { object_property_get_generic } from './get/generic.mjs';
import { metadata } from '../../metadata.mjs';
import { object_property_exists } from './exists.mjs';
export function object_property_get(object, property_name) {
    let lambda = object_property_exists;
    return object_property_get_generic(lambda, object, property_name);
    metadata([]);
}