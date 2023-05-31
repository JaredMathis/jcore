import { metadata } from '../../metadata.mjs';
export function object_property_remove(object, property_name) {
    delete object[property_name];
    metadata([]);
}