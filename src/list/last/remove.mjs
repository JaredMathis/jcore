import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_is } from '../is.mjs';
export function list_last_remove(list) {
    arguments_assert(arguments, [list_is]);
    return list.pop();
    metadata([]);
}