import { metadata } from '../../metadata.mjs';
export function object_property_set(object, property_name, value) {
    object[property_name] = value;
    metadata([]);
}