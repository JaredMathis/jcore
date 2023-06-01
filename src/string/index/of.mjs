import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
export function string_index_of(input, search) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    return input.indexOf(search);
    metadata([]);
}