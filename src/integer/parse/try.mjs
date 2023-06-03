import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { tautology } from '../../tautology.mjs';
export function integer_parse_try(input) {
    arguments_assert(arguments, [tautology]);
    return parseInt(input, 10);
    metadata([]);
}