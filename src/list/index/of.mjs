import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
export function list_index_of(list, element) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    return list.indexOf(element);
    metadata([]);
}