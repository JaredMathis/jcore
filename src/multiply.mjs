import { number_is } from './number/is.mjs';
import { arguments_assert } from './arguments/assert.mjs';
export function multiply(a, b) {
    arguments_assert(arguments, [
        number_is,
        number_is
    ]);
    return a - b;
}