import { metadata } from '../metadata.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { number_is } from '../number/is.mjs';
export function less_than(left, right) {
    arguments_assert(arguments, [
        number_is,
        number_is
    ]);
    return left < right;
    metadata([]);
}