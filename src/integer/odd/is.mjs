import { equal } from '../../equal.mjs';
import { integer_mod } from '../mod.mjs';
import { integer_is } from '../is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function integer_odd_is(a) {
    arguments_assert(arguments, [integer_is]);
    let result_mod = integer_mod(a, 2);
    return equal(result_mod, 1);
}