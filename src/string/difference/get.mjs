import { metadata } from '../../metadata.mjs';
import { integer_value_0 } from '../../integer/value/0.mjs';
import { string_difference_get_recursive } from './get/recursive.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_is } from '../is.mjs';
export function string_difference_get(left, right) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    let v_2 = integer_value_0();
    let v_3 = integer_value_0();
    let v = string_difference_get_recursive(left, right, v_2, v_3);
    return v;
    metadata([]);
}