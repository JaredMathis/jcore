import { metadata } from '../metadata.mjs';
import { boolean_is } from '../boolean/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function less_than(left, right) {
    arguments_assert(arguments, [
        boolean_is,
        boolean_is
    ]);
    return left || right;
    metadata([]);
}