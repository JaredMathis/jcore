import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_is } from '../is.mjs';
export function string_letter_is(first) {
    arguments_assert(arguments, [string_is]);
    return first.toUpperCase() != first.toLowerCase();
}