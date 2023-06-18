import { arguments_assert } from '../../arguments/assert.mjs';
import { equal } from '../../equal.mjs';
import { number_is } from '../is.mjs';
export function number_zero_is(a) {
    arguments_assert(arguments, [number_is]);
    let v = equal(a, 0);
    return v;
}