import { integer_value_1 } from '../integer/value/1.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { integer_is } from '../integer/is.mjs';
export function subtract_1(l) {
    arguments_assert(arguments, [integer_is]);
    return l - integer_value_1();
    metadata([]);
}