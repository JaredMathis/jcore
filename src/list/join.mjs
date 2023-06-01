import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function list_join(list, separator) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    return list.join(separator);
    metadata([]);
}