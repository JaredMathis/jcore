import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
export function string_starts_with(input, search) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    return input.startsWith(search);
    metadata([]);
}