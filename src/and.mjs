import { metadata } from './metadata.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { boolean_is } from './boolean/is.mjs';
export function and(left, right) {
    arguments_assert(arguments, [
        boolean_is,
        boolean_is
    ]);
    return left && right;
    metadata([]);
}