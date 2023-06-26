import { metadata } from '../metadata.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { integer_is } from './is.mjs';
export function integer_mod(a, b) {
    arguments_assert(arguments, [
        integer_is,
        integer_is
    ]);
    return a % b;
    metadata([]);
}