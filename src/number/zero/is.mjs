import { arguments_assert } from '../../arguments/assert.mjs';
import { equal } from '../../equal.mjs';
import { integer_is } from '../../integer/is.mjs';
export function number_zero_is(a) {
    arguments_assert(arguments, [integer_is]);
    return equal(a, 0);
}