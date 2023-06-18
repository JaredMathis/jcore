import { list_index_of } from '../of.mjs';
import { list_length_is_1 } from '../../length/is/1.mjs';
import { assert } from '../../../assert.mjs';
import { equal } from '../../../equal.mjs';
import { list_filter } from '../../filter.mjs';
export function list_index_of_single(parts, part) {
    let filtered = list_filter(parts, p => equal(p, part));
    let v = list_length_is_1(filtered);
    assert(v);
    let index = list_index_of(parts, part);
    return index;
}