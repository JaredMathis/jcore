import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { list_last_index } from './last/index.mjs';
import { list_index_at } from './index/at.mjs';
export function list_last(list) {
    arguments_assert(arguments, [tautology]);
    return list_index_at(list, list_last_index(list));
    metadata([]);
}