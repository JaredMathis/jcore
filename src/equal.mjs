import { arguments_assert } from './arguments/assert.mjs';
import { metadata } from './metadata.mjs';
import { defined_is } from './defined/is.mjs';
export function equal(left, right) {
    arguments_assert(arguments, [
        defined_is,
        defined_is
    ]);
    return left === right;
    metadata([]);
}