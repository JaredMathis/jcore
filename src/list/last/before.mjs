import { subtract_1 } from '../../subtract/1.mjs';
import { metadata } from '../../metadata.mjs';
import { list_get } from '../get.mjs';
import { list_last_index } from './index.mjs';
import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function list_last_before(list) {
    arguments_assert(arguments, [list_is]);
    let v = list_last_index(list);
    let v_2 = list_get(list, subtract_1(v));
    return v_2;
    metadata([]);
}