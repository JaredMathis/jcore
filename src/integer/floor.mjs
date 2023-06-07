import { number_is } from '../number/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function integer_floor(n) {
    arguments_assert(arguments, [number_is]);
    return Math.floor(n);
}