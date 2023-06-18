import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { list_last_index } from './last/index.mjs';
import { list_get } from './get.mjs';
export function list_last(list) {
    arguments_assert(arguments, [list_is]);
    let v = list_last_index(list);
    let v_2 = list_get(list, v);
    return v_2;
    metadata([]);
}