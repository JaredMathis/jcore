import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { list_is } from './is.mjs';
export function list_length(list) {
    arguments_assert(arguments, [list_is]);
    return list.length;
    metadata([]);
}