import { or } from '../or.mjs';
import { list_length } from './length.mjs';
import { equal } from '../equal.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { list_is } from './is.mjs';
import { integer_is } from '../integer/is.mjs';
import { assert } from '../assert.mjs';
import { list_index_valid } from './index/valid.mjs';
export function list_slice(list, start, end) {
    arguments_assert(arguments, [
        list_is,
        integer_is,
        integer_is
    ]);
    for (let i of [
            start,
            end
        ]) {
        let v_4 = list_index_valid(list, i);
        let v_6 = list_length(list);
        let v_5 = equal(i, v_6);
        let v_2 = or(v_4, v_5);
        assert(v_2);
    }
    let v_3 = start <= end;
    assert(v_3);
    let v = list.slice(start, end);
    return v;
    metadata([]);
}