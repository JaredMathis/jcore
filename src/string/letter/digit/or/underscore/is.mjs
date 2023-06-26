import { boolean_value_true } from '../../../../../boolean/value/true.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { string_letter_digit_or_underscore_is_generic } from './is/generic.mjs';
import { string_is } from '../../../../is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export function string_letter_digit_or_underscore_is(c) {
    arguments_assert(arguments, [string_is]);
    let v_2 = boolean_value_true();
    let v = string_letter_digit_or_underscore_is_generic(c, v_2);
    return v;
    metadata([]);
}