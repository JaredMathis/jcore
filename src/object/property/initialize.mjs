import { object_property_set } from './set.mjs';
import { object_property_exists } from './exists.mjs';
import { assert } from '../../assert.mjs';
export function object_property_initialize(object, property_name, initial_value) {
    assert(!object_property_exists(object, property_name));
    object_property_set(object, property_name, initial_value);
}