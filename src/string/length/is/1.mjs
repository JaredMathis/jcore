import { metadata } from '../../../metadata.mjs';
import { equal } from '../../../equal.mjs';
import { integer_value_1 } from '../../../integer/value/1.mjs';
import { string_length } from '../../length.mjs';
export function string_length_is_1(c) {
    let v = string_length(c);
    let v_2 = integer_value_1();
    let v_3 = equal(v, v_2);
    return v_3;
    metadata([]);
}