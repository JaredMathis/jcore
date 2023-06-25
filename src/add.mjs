import { number_is } from './number/is.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { metadata } from './metadata.mjs';
export function add(a, b) {
    arguments_assert(arguments, [
        number_is,
        number_is
    ]);
    return a + b;
    metadata([]);
}