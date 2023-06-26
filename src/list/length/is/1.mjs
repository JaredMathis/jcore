import { integer_value_1 } from '../../../integer/value/1.mjs';
import { list_is } from '../../is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { list_length_is_value } from './value.mjs';
export function list_length_is_1(list) {
    arguments_assert(arguments, [list_is]);
    let v_2 = integer_value_1();
    let v = list_length_is_value(list, v_2);
    return v;
    metadata([]);
}