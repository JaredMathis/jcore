import { string_letter_is } from '../letter/is.mjs';
import { string_to_list } from '../to/list.mjs';
import { tautology } from '../../tautology.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { string_is } from '../is.mjs';
import { list_length_is_0 } from '../../list/length/is/0.mjs';
import { list_first } from '../../list/first.mjs';
export function string_identifier_is(value) {
    arguments_assert(arguments, [tautology]);
    if (!string_is(value)) {
        return false;
    }
    let list = string_to_list(value);
    if (list_length_is_0(list)) {
        return true;
    }
    let first = list_first(list);
    if (!string_letter_is(first)) {
        return false;
    }
    for (let c of list) {
        if (false) {
            if (!string_letter_is(c)) {
                return false;
            }
            if (!string_digit_is(c)) {
                return false;
            }
            if (!string_underscore_is(c)) {
                return false;
            }
        }
    }
    return true;
    metadata([]);
}