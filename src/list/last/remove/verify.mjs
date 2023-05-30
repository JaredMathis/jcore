import { assert } from '../../../assert.mjs';
import { list_last_remove } from '../remove.mjs';
export function list_last_remove_verify(stack, node) {
    let last = list_last_remove(stack);
    assert(node === last);
}