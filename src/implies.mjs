import { error } from './error.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { boolean_is } from './boolean/is.mjs';
export function implies(b1, b2) {
    arguments_assert(arguments, [
        boolean_is,
        boolean_is
    ]);
    return !(b1) || b2;
}