import { metadata } from '../../../metadata.mjs';
import { list_index_of } from '../of.mjs';
import { list_length_is_1 } from '../../length/is/1.mjs';
import { assert } from '../../../assert.mjs';
import { equal } from '../../../equal.mjs';
import { list_filter } from '../../filter.mjs';
export function list_index_of_single(parts, part) {
    let v_4 = function v_2(p) {
        let v_3 = equal(p, part);
        return v_3;
    };
    let filtered = list_filter(parts, v_4);
    let v = list_length_is_1(filtered);
    assert(v);
    let index = list_index_of(parts, part);
    return index;
    metadata([]);
}