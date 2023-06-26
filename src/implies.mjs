import { or } from './or.mjs';
import { not } from './not.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { boolean_is } from './boolean/is.mjs';
export function implies(b1, b2) {
    arguments_assert(arguments, [
        boolean_is,
        boolean_is
    ]);
    return or(not(b1), b2);
}