import { arguments_assert } from '../../arguments/assert.mjs';
import { string_is } from '../is.mjs';
import { string_length } from '../length.mjs';
export function string_digit_is(c) {
    arguments_assert(arguments, [string_is]);
    return string_length(c) === 1 && c >= '0' && c <= '9';
}