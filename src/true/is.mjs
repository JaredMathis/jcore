import { boolean_value_true } from '../boolean/value/true.mjs';
import { metadata } from '../metadata.mjs';
import { equal } from '../equal.mjs';
import { boolean_is } from '../boolean/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function true_is(b) {
    arguments_assert(arguments, [boolean_is]);
    return equal(b, boolean_value_true());
    metadata([]);
}