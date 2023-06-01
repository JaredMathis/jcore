import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function list_filter(list, predicate) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    return list.filter(predicate);
    metadata([]);
}