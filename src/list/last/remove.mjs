import { not } from '../../not.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { assert } from '../../assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_is } from '../is.mjs';
import { list_empty } from '../empty.mjs';
export function list_last_remove(list) {
    arguments_assert(arguments, [list_is]);
    let v_3 = list_empty(list);
    let v = not(v_3);
    assert(v);
    let v_2 = list.pop();
    return v_2;
    metadata([]);
}