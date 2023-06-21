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
    if (not(string_is(value))) {
        return false;
    }
    let list = string_to_list(value);
    if (list_empty(list)) {
        return false;
    }
    if (enforce_first) {
        let first = list_first(list);
        if (not(string_letter_is(first))) {
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
        if (not(string_letter_digit_or_underscore_is_generic(c, allow_underscores))) {
            return false;
        }
    }
    return true;
}