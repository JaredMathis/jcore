import { equal } from '../../../equal.mjs';
import { integer_mod } from '../../mod.mjs';
export function integer_even_is_generic(a, expected) {
    let result_mod = integer_mod(a, 2);
    return equal(result_mod, expected);
}