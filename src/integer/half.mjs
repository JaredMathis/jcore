import { integer_even_is } from './even/is.mjs';
import { integer_is } from './is.mjs';
import { integer_divide_evenly } from './divide/evenly.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { assert } from '../assert.mjs';
export function integer_half(a) {
    arguments_assert(arguments, [integer_is]);
    let v = integer_even_is(a);
    assert(v);
    let result = integer_divide_evenly(a, 2);
    return result;
}