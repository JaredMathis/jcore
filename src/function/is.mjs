import { arguments_assert } from '../arguments/assert.mjs';
import { tautology } from '../tautology.mjs';
export function function_is(candidate) {
    arguments_assert(arguments, [tautology]);
    return typeof candidate === 'function';
}