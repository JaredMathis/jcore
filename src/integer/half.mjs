import { integer_is } from './is.mjs';
import { integer_divide } from './divide.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function integer_half(a, b) {
    arguments_assert(arguments, [
        integer_is,
        integer_is
    ]);
    let result = integer_divide(a, b);
    return result;
}