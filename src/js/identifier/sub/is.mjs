import { boolean_value_true } from '../../../boolean/value/true.mjs';
import { boolean_value_false } from '../../../boolean/value/false.mjs';
import { string_is } from '../../../string/is.mjs';
import { js_identifier_is_generic } from '../is/generic.mjs';
import { metadata } from '../../../metadata.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function js_identifier_sub_is(value) {
    arguments_assert(arguments, [string_is]);
    let enforce_first_and_last = boolean_value_false();
    let v_2 = boolean_value_true();
    let v = js_identifier_is_generic(value, enforce_first_and_last, enforce_first_and_last, v_2);
    return v;
    metadata([]);
}