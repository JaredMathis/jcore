import { assert } from '../../assert.mjs';
import { array_index_valid } from '../../array/index/valid.mjs';
export function array_remove_at(list, index) {
    assert(array_index_valid(list, index));
    list.splice(index, 1);
}