import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { list_find_generic } from './find/generic.mjs';
import { metadata } from '../metadata.mjs';
export function list_find(list, predicate) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    let or_null = false;
    return list_find_generic(list, predicate, or_null);
    metadata([]);
}