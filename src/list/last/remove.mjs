import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
export function list_last_remove(list) {
    arguments_assert(arguments, [tautology]);
    return list.pop();
    metadata([]);
}