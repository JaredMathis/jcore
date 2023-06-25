import { integer_value_0 } from '../value/0.mjs';
import { integer_even_is_generic } from './is/generic.mjs';
import { integer_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function integer_even_is(a) {
    arguments_assert(arguments, [integer_is]);
    let v = integer_even_is_generic(a, integer_value_0());
    return v;
}