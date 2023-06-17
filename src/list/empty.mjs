import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { list_length_is_value } from './length/is/value.mjs';
export function list_empty(list) {
    arguments_assert(arguments, [list_is]);
    return list_length_is_value(list, 0);
    metadata([]);
}