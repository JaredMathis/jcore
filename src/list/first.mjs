import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { list_first_index } from './first/index.mjs';
import { list_get } from './get.mjs';
export function list_first(list) {
    arguments_assert(arguments, [list_is]);
    return list_get(list, list_first_index());
    metadata([]);
}