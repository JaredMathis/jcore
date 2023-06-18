import { integer_even_is_generic } from '../even/is/generic.mjs';
import { integer_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function integer_odd_is(a) {
    arguments_assert(arguments, [integer_is]);
    let v = integer_even_is_generic(a, 1);
    return v;
}