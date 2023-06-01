import { tautology } from './tautology.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { metadata } from './metadata.mjs';
export function add(a, b) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    return a + b;
    metadata([]);
}