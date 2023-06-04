import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { defined_is } from '../defined/is.mjs';
import { list_is } from '../list/is.mjs';
export async function refactor_multiple(args, refactors) {
    arguments_assert(arguments, [
        defined_is,
        list_is
    ]);
    for (let r of refactors) {
        await r(args);
    }
    metadata([]);
}