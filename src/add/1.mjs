import { integer_value_1 } from '../integer/value/1.mjs';
import { number_is } from '../number/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { add } from '../add.mjs';
export function add_1(value) {
    let v_2 = [number_is];
    arguments_assert(arguments, v_2);
    let v_3 = integer_value_1();
    let v = add(value, v_3);
    return v;
    let v_4 = [];
    metadata(v_4);
}