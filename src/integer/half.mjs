import { integer_value_2 } from './value/2.mjs';
import { integer_even_is } from './even/is.mjs';
import { integer_is } from './is.mjs';
import { integer_divide_evenly } from './divide/evenly.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { assert } from '../assert.mjs';
export function integer_half(a) {
    arguments_assert(arguments, [integer_is]);
    let v = integer_even_is(a);
    assert(v);
    let v_2 = integer_value_2();
    let result = integer_divide_evenly(a, v_2);
    return result;
}