import { and } from '../../and.mjs';
import { integer_value_0 } from '../../integer/value/0.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { list_last_index } from '../last/index.mjs';
import { list_is } from '../is.mjs';
import { integer_is } from '../../integer/is.mjs';
export function list_index_valid(list, index) {
    arguments_assert(arguments, [
        list_is,
        integer_is
    ]);
    let v = index >= integer_value_0();
    let v_2 = index <= list_last_index(list);
    let v_3 = and(v, v_2);
    return v_3;
    metadata([]);
}