import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { list_first_index } from './first/index.mjs';
import { list_get } from './get.mjs';
export function list_first(list) {
    arguments_assert(arguments, [list_is]);
    let v = list_first_index();
    let v_2 = list_get(list, v);
    return v_2;
    metadata([]);
}