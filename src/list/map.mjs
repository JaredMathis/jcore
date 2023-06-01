import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function list_map(list, mapper) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    return list.map(element => mapper(element));
    metadata([]);
}