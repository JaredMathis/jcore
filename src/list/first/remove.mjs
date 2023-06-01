import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_remove_at } from '../remove/at.mjs';
import { list_first_index } from './index.mjs';
export function list_first_remove(list) {
    arguments_assert(arguments, [tautology]);
    list_remove_at(list, list_first_index());
    metadata([]);
}