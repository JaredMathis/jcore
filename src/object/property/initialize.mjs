import { not } from '../../not.mjs';
import { string_is } from '../../string/is.mjs';
import { defined_is } from '../../defined/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { object_property_set } from './set.mjs';
import { object_property_exists } from './exists.mjs';
import { assert } from '../../assert.mjs';
export function object_property_initialize(object, property_name, initial_value) {
    arguments_assert(arguments, [
        defined_is,
        string_is,
        defined_is
    ]);
    let v_2 = object_property_exists(object, property_name);
    let v = not(v_2);
    assert(v);
    object_property_set(object, property_name, initial_value);
    metadata([]);
}