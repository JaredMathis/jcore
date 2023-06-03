import { arguments_assert } from '../arguments/assert.mjs';
import { tautology } from '../tautology.mjs';
export function defined_is(variable) {
    arguments_assert(arguments, [tautology]);
    return typeof variable !== 'undefined';
}