import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { defined_is } from '../defined/is.mjs';
export function boolean_is(b) {
    arguments_assert(arguments, [defined_is]);
    return b === true || b === false;
}