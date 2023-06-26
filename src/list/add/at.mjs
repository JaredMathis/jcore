import { or } from '../../or.mjs';
import { integer_value_0 } from '../../integer/value/0.mjs';
import { metadata } from '../../metadata.mjs';
import { list_index_valid } from '../index/valid.mjs';
import { assert } from '../../assert.mjs';
import { integer_is } from '../../integer/is.mjs';
import { list_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { defined_is } from '../../defined/is.mjs';
import { equal } from '../../equal.mjs';
import { list_length } from '../length.mjs';
export function list_add_at(list, value, index) {
    arguments_assert(arguments, [
        list_is,
        defined_is,
        integer_is
    ]);
    let v_2 = list_index_valid(list, index);
    let v_4 = list_length(list);
    let v_3 = equal(index, v_4);
    let v = or(v_2, v_3);
    assert(v);
    const delete_count = integer_value_0();
    list.splice(index, delete_count, value);
    metadata([]);
}