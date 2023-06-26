import { metadata } from '../metadata.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { defined_is } from '../defined/is.mjs';
import { string_is } from '../string/is.mjs';
export function path_is(value) {
    arguments_assert(arguments, [defined_is]);
    let v = string_is(value);
    return v;
    metadata([]);
}