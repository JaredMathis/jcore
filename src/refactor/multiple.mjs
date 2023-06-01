import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export async function refactor_multiple(args, refactors) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    for (let r of refactors) {
        await r(args);
    }
    metadata([]);
}