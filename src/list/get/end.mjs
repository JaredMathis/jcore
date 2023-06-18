import { list_get } from '../get.mjs';
import { subtract } from '../../subtract.mjs';
import { list_last_index } from '../last/index.mjs';
import { assert } from '../../assert.mjs';
export function list_get_end(list, index_end) {
    assert(index_end >= 0);
    let index_last = list_last_index(list);
    let index = subtract(index_last, index_end);
    let v = list_get(list, index);
    return v;
}