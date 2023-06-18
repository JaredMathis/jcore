import { defined_is } from '../defined/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { value_set_is } from './set/is.mjs';
import { assert } from '../assert.mjs';
import { object_property_get } from '../object/property/get.mjs';
export function value_get(value_object) {
    arguments_assert(arguments, [defined_is]);
    let v = value_set_is(value_object);
    assert(v);
    let value = object_property_get(value_object, 'value');
    return value;
    metadata([]);
}