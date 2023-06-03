import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function string_letter_is(first) {
    arguments_assert(arguments, [tautology]);
    return first.toUpperCase() != first.toLowerCase();
}