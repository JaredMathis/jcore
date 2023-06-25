import { integer_value_1 } from '../../integer/value/1.mjs';
import { integer_is } from '../../integer/is.mjs';
import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { assert } from '../../assert.mjs';
import { list_index_valid } from '../index/valid.mjs';
import { list_single } from '../single.mjs';
export function list_remove_at(list, index) {
    arguments_assert(arguments, [
        list_is,
        integer_is
    ]);
    let v = list_index_valid(list, index);
    assert(v);
    const delete_count = integer_value_1();
    let deleted = list.splice(index, delete_count);
    let v_2 = list_single(deleted);
    return v_2;
    metadata([]);
}