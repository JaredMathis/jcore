import { metadata } from '../metadata.mjs';
import { integer_value_0 } from '../integer/value/0.mjs';
import { count } from '../count.mjs';
import { string_sub } from './sub.mjs';
export function string_take(input, count) {
    let v_2 = integer_value_0();
    let v = string_sub(input, v_2, count);
    return v;
    metadata([]);
}