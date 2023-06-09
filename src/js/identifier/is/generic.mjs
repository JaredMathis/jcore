import { boolean_value_true } from '../../../boolean/value/true.mjs';
import { boolean_value_false } from '../../../boolean/value/false.mjs';
import { metadata } from '../../../metadata.mjs';
import { not } from '../../../not.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_includes } from '../../../string/includes.mjs';
import { string_underscore_is } from '../../../string/underscore/is.mjs';
import { list_last } from '../../../list/last.mjs';
import { string_letter_is } from '../../../string/letter/is.mjs';
import { list_first } from '../../../list/first.mjs';
import { list_empty } from '../../../list/empty.mjs';
import { string_to_list } from '../../../string/to/list.mjs';
import { string_is } from '../../../string/is.mjs';
import { boolean_is } from '../../../boolean/is.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { string_letter_digit_or_underscore_is_generic } from '../../../string/letter/digit/or/underscore/is/generic.mjs';
import { function_name_separator } from '../../../function/name/separator.mjs';
export function js_identifier_is_generic(value, enforce_first, enforce_last, allow_underscores) {
    arguments_assert(arguments, [
        defined_is,
        boolean_is,
        boolean_is,
        boolean_is
    ]);
    let v_7 = string_is(value);
    let v = not(v_7);
    if (v) {
        let v_11 = boolean_value_false();
        return v_11;
    }
    let list = string_to_list(value);
    let v_2 = list_empty(list);
    if (v_2) {
        let v_12 = boolean_value_false();
        return v_12;
    }
    if (enforce_first) {
        let first = list_first(list);
        let v_8 = string_letter_is(first);
        let v_3 = not(v_8);
        if (v_3) {
            let v_13 = boolean_value_false();
            return v_13;
        }
    }
    if (enforce_last) {
        let last = list_last(list);
        let v_4 = string_underscore_is(last);
        if (v_4) {
            let v_14 = boolean_value_false();
            return v_14;
        }
    }
    let underscore = function_name_separator();
    let v_9 = `${ underscore }${ underscore }`;
    let v_5 = string_includes(value, v_9);
    if (v_5) {
        let v_15 = boolean_value_false();
        return v_15;
    }
    for (let c of list) {
        let v_10 = string_letter_digit_or_underscore_is_generic(c, allow_underscores);
        let v_6 = not(v_10);
        if (v_6) {
            let v_16 = boolean_value_false();
            return v_16;
        }
    }
    let v_17 = boolean_value_true();
    return v_17;
    metadata([]);
}