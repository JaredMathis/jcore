import { metadata } from '../metadata.mjs';
import { defined_is } from '../defined/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { json_to } from './to.mjs';
import { equal_by } from '../equal/by.mjs';
export function json_equal(a, b) {
    arguments_assert(arguments, [
        defined_is,
        defined_is
    ]);
    let v = equal_by(json_to, a, b);
    return v;
    metadata([]);
}