import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_includes } from '../../includes.mjs';
import { string_underscore_is } from '../../underscore/is.mjs';
import { list_last } from '../../../list/last.mjs';
import { string_letter_is } from '../../letter/is.mjs';
import { list_first } from '../../../list/first.mjs';
import { list_length_is_0 } from '../../../list/length/is/0.mjs';
import { string_to_list } from '../../to/list.mjs';
import { string_is } from '../../is.mjs';
import { boolean_is } from '../../../boolean/is.mjs';
import { defined_is } from '../../../defined/is.mjs';
import { string_letter_digit_or_underscore_is_generic } from '../../letter/digit/or/underscore/is/generic.mjs';
import { function_name_separator } from '../../../function/name/separator.mjs';
export function string_identifier_is_generic(value, enforce_first, enforce_last, allow_underscores) {
    arguments_assert(arguments, [
        defined_is,
        boolean_is,
        boolean_is,
        boolean_is
    ]);
    if (!string_is(value)) {
        return false;
    }
    let list = string_to_list(value);
    if (list_length_is_0(list)) {
        return false;
    }
    if (enforce_first) {
        let first = list_first(list);
        if (!string_letter_is(first)) {
            return false;
        }
    }
    if (enforce_last) {
        let last = list_last(list);
        if (string_underscore_is(last)) {
            return false;
        }
    }
    let underscore = function_name_separator();
    if (string_includes(value, `${ underscore }${ underscore }`)) {
        return false;
    }
    for (let c of list) {
        if (!string_letter_digit_or_underscore_is_generic(c, allow_underscores)) {
            return false;
        }
    }
    return true;
}