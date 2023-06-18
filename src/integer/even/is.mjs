import { integer_is } from '../is.mjs';
import { integer_mod } from '../mod.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function integer_even_is(a) {
    arguments_assert(arguments, [integer_is]);
    let result = integer_mod(a, 2);
    return result;
}