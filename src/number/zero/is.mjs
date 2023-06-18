import { arguments_assert } from '../../arguments/assert.mjs';
import { equal } from '../../equal.mjs';
import { number_is } from '../is.mjs';
export function number_zero_is(a) {
    arguments_assert(arguments, [number_is]);
    return equal(a, 0);
}