import { string_is } from '../../is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_length } from '../../length.mjs';
import { equal } from '../../../equal.mjs';
export function string_sub_max_3(left, right) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    let offset = 0;
    for (let i = 0; i < string_length(left); i++) {
        let i_offset = number_add(i, offset);
        if (equal()) {
        }
    }
    return result;
}