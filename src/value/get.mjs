import { metadata } from '../metadata.mjs';
import { value_set_is } from './set/is.mjs';
import { assert } from '../assert.mjs';
import { object_property_get } from '../object/property/get.mjs';
export function value_get(value_object) {
    assert(value_set_is(value_object));
    let value = object_property_get(value_object, 'value');
    return value;
    metadata([]);
}