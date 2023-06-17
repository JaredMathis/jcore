import { equal } from '../equal.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { defined_is } from '../defined/is.mjs';
export function equal_not(a, b) {
    arguments_assert(arguments, [
        defined_is,
        defined_is
    ]);
    return !(equal(a, b));
}