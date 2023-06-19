import { list_empty_not } from '../empty/not.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { assert } from '../../assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_is } from '../is.mjs';
export function list_remove_last(list) {
    arguments_assert(arguments, [list_is]);
    let v = list_empty_not(list);
    assert(v);
    let v_2 = list.pop();
    return v_2;
    metadata([]);
}