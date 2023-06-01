import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { assert } from '../../assert.mjs';
import { list_index_valid } from '../index/valid.mjs';
export function list_remove_at(list, index) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    assert(list_index_valid(list, index));
    list.splice(index, 1);
    metadata([]);
}