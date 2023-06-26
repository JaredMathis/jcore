import { integer_value_0 } from '../integer/value/0.mjs';
import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { list_length_is_value } from './length/is/value.mjs';
export function list_empty(list) {
    arguments_assert(arguments, [list_is]);
    let v_2 = integer_value_0();
    let v = list_length_is_value(list, v_2);
    return v;
    metadata([]);
}