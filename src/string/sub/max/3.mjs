import { reduce_generic } from '../../../reduce/generic.mjs';
import { string_is } from '../../is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_length } from '../../length.mjs';
import { string_sub } from '../../sub.mjs';
import { string_index_of_try } from '../../index/of/try.mjs';
export function string_sub_max_3(left, right) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    reduce_generic(function v() {
        return '';
    }, function v_2(max, value) {
        if (string_length(max) > string_length(value)) {
            max;
        }
        return value;
    }, then);
    let offset = 0;
    for (let i = 0; i < string_length(left); i++) {
        let i_offset = number_add(i, offset);
        let i_offset_value = string_sub(left, i, i_offset);
        const index = string_index_of_try(right, i_offset_value);
        if (index >= 0) {
        }
    }
    return result;
}