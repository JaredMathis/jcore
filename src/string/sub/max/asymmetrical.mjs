import { string_length_max } from '../../length/max.mjs';
import { string_sub_max_to_result } from './to/result.mjs';
import { add } from '../../../add.mjs';
import { string_includes } from '../../includes.mjs';
import { reduce_generic } from '../../../reduce/generic.mjs';
import { string_is } from '../../is.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { string_length } from '../../length.mjs';
import { string_sub } from '../../sub.mjs';
export function string_sub_max_asymmetrical(left, right) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    let sub_result = reduce_generic(function v() {
        return '';
    }, string_length_max, function v_3(max_candidate) {
        let start = 0;
        let offset = 1;
        for (let i = 0; i < string_length(left); i++) {
            let start_offset = add(start, offset);
            let start_offset_value = string_sub(left, start, start_offset);
            const contains = string_includes(right, start_offset_value);
            if (contains) {
                max_candidate(start_offset_value);
                offset++;
            } else {
                offset = 1;
                start = i;
            }
        }
    });
    return sub_result;
}