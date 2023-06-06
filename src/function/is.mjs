import { arguments_assert } from '../arguments/assert.mjs';
import { defined_is } from '../defined/is.mjs';
export function function_is(candidate) {
    arguments_assert(arguments, [defined_is]);
    return typeof candidate === 'function';
}