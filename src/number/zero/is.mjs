import { integer_value_0 } from '../../integer/value/0.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { equal } from '../../equal.mjs';
import { number_is } from '../is.mjs';
export function number_zero_is(a) {
    arguments_assert(arguments, [number_is]);
    let v = equal(a, integer_value_0());
    return v;
}