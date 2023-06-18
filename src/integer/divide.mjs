import { integer_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function integer_divide(a, b) {
    arguments_assert(arguments, [
        integer_is,
        integer_is
    ]);
    return a / b;
}