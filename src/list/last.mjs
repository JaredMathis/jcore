import { tautology } from '../tautology.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { list_last_index } from './last/index.mjs';
import { list_get } from './get.mjs';
export function list_last(list) {
    arguments_assert(arguments, [tautology]);
    return list_get(list, list_last_index(list));
    metadata([]);
}