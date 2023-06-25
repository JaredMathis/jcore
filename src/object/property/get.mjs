import { assert } from '../../assert.mjs';
import { metadata } from '../../metadata.mjs';
import { object_property_exists } from './exists.mjs';
export function object_property_get(object, property_name) {
    let lambda = object_property_exists;
    let v = object_property_exists(object, property_name);
    assert(v);
    return object[property_name];
    metadata([]);
}