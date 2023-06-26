import { equal } from '../equal.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { defined_is } from '../defined/is.mjs';
export function object_is(v) {
    arguments_assert(arguments, [defined_is]);
    return equal(typeof v, 'object');
}