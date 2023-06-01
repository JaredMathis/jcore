import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function list_any(list, predicate) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    for (let a of list) {
        if (predicate(a)) {
            return true;
        }
    }
    return false;
    metadata([]);
}