import { metadata } from '../../metadata.mjs';
export function object_property_exists(object, property_name) {
    let v = object.hasOwnProperty(property_name);
    return v;
    metadata([]);
}