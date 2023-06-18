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
        assert(list_index_valid(list, i) || equal(i, list_length(list)));
    }
    assert(start <= end);
    let v = list.slice(start, end);
    return v;
    metadata([]);
}