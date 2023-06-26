import { metadata } from '../../metadata.mjs';
import { and } from '../../and.mjs';
import { string_length_is_1 } from '../length/is/1.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_is } from '../is.mjs';
export function string_digit_is(c) {
    arguments_assert(arguments, [string_is]);
    let v_4 = string_length_is_1(c);
    let v_5 = c >= '0';
    let v = and(v_4, v_5);
    let v_2 = c <= '9';
    let v_3 = and(v, v_2);
    return v_3;
    metadata([]);
}