import { integer_value_2 } from '../../value/2.mjs';
import { equal } from '../../../equal.mjs';
import { integer_mod } from '../../mod.mjs';
export function integer_even_is_generic(a, expected) {
    let result_mod = integer_mod(a, integer_value_2());
    let v = equal(result_mod, expected);
    return v;
}