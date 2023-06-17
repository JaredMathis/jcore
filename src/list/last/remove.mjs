import { arguments_assert } from '../../arguments/assert.mjs';
import { assert } from '../../assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_is } from '../is.mjs';
import { list_empty } from '../empty.mjs';
export function list_last_remove(list) {
    arguments_assert(arguments, [list_is]);
    assert(not(list_empty(list)));
    return list.pop();
    metadata([]);
}