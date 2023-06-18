import { integer_even_is } from './even/is.mjs';
import { integer_is } from './is.mjs';
import { integer_divide } from './divide.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { assert } from '../assert.mjs';
export function integer_half(a) {
    arguments_assert(arguments, [integer_is]);
    assert(integer_even_is(a));
    let result = integer_divide(a, 2);
    return result;
}