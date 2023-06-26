import { metadata } from '../metadata.mjs';
import { object_property_exists } from '../object/property/exists.mjs';
import { assert } from '../assert.mjs';
import { integer_is } from '../integer/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { string_is } from './is.mjs';
export function string_get(s, index) {
    arguments_assert(arguments, [
        string_is,
        integer_is
    ]);
    let v = object_property_exists(s, index);
    assert(v);
    return s[index];
    metadata([]);
}