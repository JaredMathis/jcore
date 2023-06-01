import { tautology } from './tautology.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { metadata } from './metadata.mjs';
export function equal(left, right) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    return left === right;
    metadata([]);
}