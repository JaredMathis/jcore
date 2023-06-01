import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
export function string_ends_with(input, suffix) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    return input.endsWith(suffix);
    metadata([]);
}