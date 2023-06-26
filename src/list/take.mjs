import { integer_value_0 } from '../integer/value/0.mjs';
import { count } from '../count.mjs';
import { integer_is } from '../integer/is.mjs';
import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { list_slice } from './slice.mjs';
export function list_take(list, count) {
    arguments_assert(arguments, [
        list_is,
        integer_is
    ]);
    let v_2 = integer_value_0();
    let v = list_slice(list, v_2, count);
    return v;
    metadata([]);
}