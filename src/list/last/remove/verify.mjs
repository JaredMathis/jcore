import { equal } from '../../../equal.mjs';
import { assert } from '../../../assert.mjs';
import { list_last_remove } from '../remove.mjs';
export function list_last_remove_verify(list, last_expected) {
    let last_actual = list_last_remove(list);
    assert(equal(last_expected, last_actual));
}