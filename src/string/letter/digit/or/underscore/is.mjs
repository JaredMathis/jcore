import { string_is } from '../../../../is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { string_underscore_is } from '../../../../underscore/is.mjs';
import { string_digit_is } from '../../../../digit/is.mjs';
import { string_letter_is } from '../../../is.mjs';
import { string_length_is_1 } from '../../../../length/is/1.mjs';
export function string_letter_digit_or_underscore_is(c) {
    arguments_assert(arguments, [string_is]);
    let allow_underscores = true;
    if (!string_length_is_1(c)) {
        return false;
    }
    if (string_letter_is(c)) {
        return true;
    }
    if (string_digit_is(c)) {
        return true;
    }
    if (string_underscore_is(c)) {
        return true;
    }
    return false;
}