import { arguments_assert } from '../../arguments/assert.mjs';
import { string_is } from '../is.mjs';
export function string_digit_is(c) {
    arguments_assert(arguments, [string_is]);
    return c >= '0' && c <= '9';
}