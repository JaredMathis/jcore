import { integer_value_0 } from '../integer/value/0.mjs';
import { list_is } from './is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { list_length_is_value } from './length/is/value.mjs';
export function list_empty(list) {
    arguments_assert(arguments, [list_is]);
    let v = list_length_is_value(list, integer_value_0());
    return v;
    metadata([]);
}