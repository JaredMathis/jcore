import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_last_index } from './index.mjs';
export function list_last_map(list, mapper) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    list[list_last_index(list)] = mapper(list[list_last_index(list)]);
    metadata([]);
}