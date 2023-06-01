import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
export function string_sub_from(input, start, end) {
    arguments_assert(arguments, [
        tautology,
        tautology,
        tautology
    ]);
    return input.slice(start, end);
    metadata([]);
}