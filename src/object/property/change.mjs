import { string_is } from '../../string/is.mjs';
import { defined_is } from '../../defined/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { object_property_set } from './set.mjs';
import { object_property_get } from './get.mjs';
import { assert } from '../../assert.mjs';
import { not } from '../../not.mjs';
import { equal } from '../../equal.mjs';
export function object_property_change(f, property_name, value) {
    arguments_assert(arguments, [
        defined_is,
        string_is,
        defined_is
    ]);
    let before = object_property_get(f, property_name);
    let v_2 = equal(before, value);
    let v = not(v_2);
    assert(v);
    object_property_set(f, property_name, value);
    metadata([]);
}