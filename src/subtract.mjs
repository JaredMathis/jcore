import { arguments_assert } from './arguments/assert.mjs';
import { number_is } from './number/is.mjs';
export function subtract(a, b) {
    arguments_assert(arguments, [
        number_is,
        number_is
    ]);
    return a - b;
    metadata([]);
}