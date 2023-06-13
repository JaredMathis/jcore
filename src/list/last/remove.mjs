import { arguments_assert } from '../../arguments/assert.mjs';
import { assert } from '../../assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_is } from '../is.mjs';
import { list_length_is_0 } from '../length/is/0.mjs';
export function list_last_remove(list) {
    arguments_assert(arguments, [list_is]);
    assert(!list_length_is_0(list));
    return list.pop();
    metadata([]);
}