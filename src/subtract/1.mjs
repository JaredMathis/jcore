import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function subtract_1(l) {
    arguments_assert(arguments, [tautology]);
    return l - 1;
    metadata([]);
}