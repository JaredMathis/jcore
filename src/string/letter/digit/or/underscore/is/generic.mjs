import { boolean_value_true } from '../../../../../../boolean/value/true.mjs';
import { boolean_value_false } from '../../../../../../boolean/value/false.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { not } from '../../../../../../not.mjs';
import { string_underscore_is } from '../../../../../underscore/is.mjs';
import { string_digit_is } from '../../../../../digit/is.mjs';
import { string_letter_is } from '../../../../is.mjs';
import { string_length_is_1 } from '../../../../../length/is/1.mjs';
import { string_is } from '../../../../../is.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { boolean_is } from '../../../../../../boolean/is.mjs';
export function string_letter_digit_or_underscore_is_generic(c, allow_underscores) {
    arguments_assert(arguments, [
        string_is,
        boolean_is
    ]);
    let v_5 = string_length_is_1(c);
    let v = not(v_5);
    if (v) {
        let v_6 = boolean_value_false();
        return v_6;
    }
    let v_2 = string_letter_is(c);
    if (v_2) {
        let v_7 = boolean_value_true();
        return v_7;
    }
    let v_3 = string_digit_is(c);
    if (v_3) {
        let v_8 = boolean_value_true();
        return v_8;
    }
    if (allow_underscores) {
        let v_4 = string_underscore_is(c);
        if (v_4) {
            let v_9 = boolean_value_true();
            return v_9;
        }
    }
    let v_10 = boolean_value_false();
    return v_10;
    metadata([]);
}