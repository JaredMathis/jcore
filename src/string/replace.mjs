import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function string_replace(input, from, to) {
    arguments_assert(arguments, [
        tautology,
        tautology,
        tautology
    ]);
    return input.replaceAll(from, to);
    metadata([]);
}