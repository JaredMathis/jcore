import { metadata } from '../metadata.mjs';
import { object_property_get } from './property/get.mjs';
export function object_each(object, lambda) {
    for (let key in object) {
        let value = object_property_get(object, key);
        lambda(value, key);
    }
    metadata([]);
}