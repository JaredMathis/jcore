import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_remove_at } from '../remove/at.mjs';
import { list_first_index } from './index.mjs';
export function list_first_remove(list) {
    arguments_assert(arguments, [list_is]);
    let v = list_first_index();
    let v_2 = list_remove_at(list, v);
    return v_2;
    metadata([]);
}