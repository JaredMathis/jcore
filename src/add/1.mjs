import { integer_value_1 } from '../integer/value/1.mjs';
import { number_is } from '../number/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { add } from '../add.mjs';
export function add_1(value) {
    arguments_assert(arguments, [number_is]);
    let v_2 = integer_value_1();
    let v = add(value, v_2);
    return v;
    metadata([]);
}