import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function string_length(input) {
    arguments_assert(arguments, [tautology]);
    return input.length;
    metadata([]);
}