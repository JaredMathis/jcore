import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { assert } from '../../assert.mjs';
export function list_index_of(list, element) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    let result = list.indexOf(element);
    assert(result >= 0);
    return result;
    metadata([]);
}