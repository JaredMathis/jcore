import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_last_index } from '../last/index.mjs';
import { list_is } from '../is.mjs';
import { integer_is } from '../../integer/is.mjs';
export function list_index_valid(list, index) {
    arguments_assert(arguments, [
        list_is,
        integer_is
    ]);
    return index >= 0 && index <= list_last_index(list);
    metadata([]);
}