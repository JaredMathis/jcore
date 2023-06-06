import { arguments_assert } from '../arguments/assert.mjs';
import { defined_is } from '../defined/is.mjs';
import { tautology } from '../tautology.mjs';
export function object_is(v) {
    arguments_assert(arguments, [defined_is]);
    return typeof v === 'object';
}