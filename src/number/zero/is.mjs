import { metadata } from '../../metadata.mjs';
import { integer_value_0 } from '../../integer/value/0.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { equal } from '../../equal.mjs';
import { number_is } from '../is.mjs';
export function number_zero_is(a) {
    arguments_assert(arguments, [number_is]);
    let v_2 = integer_value_0();
    let v = equal(a, v_2);
    return v;
    metadata([]);
}