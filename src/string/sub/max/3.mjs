import { add } from '../../../add.mjs';
import { string_includes } from '../../includes.mjs';
import { reduce_generic } from '../../../reduce/generic.mjs';
import { string_is } from '../../is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_length } from '../../length.mjs';
import { string_sub } from '../../sub.mjs';
export function string_sub_max_3(left, right) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    return reduce_generic(function v() {
        return '';
    }, function v_2(max, value) {
        if (string_length(max) > string_length(value)) {
            max;
        }
        return value;
    }, function v_3(max_candidate) {
        let offset = 1;
        for (let i = 0; i < string_length(left); i++) {
            let i_offset = add(i, offset);
            let i_offset_value = string_sub(left, i, i_offset);
            console.log({i,offset})
            const contains = string_includes(right, i_offset_value);
            if (contains) {
                max_candidate(i_offset_value);
            }
        }
    });
}