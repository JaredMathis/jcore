import { string_length } from '../length.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { less_than } from '../../less/than.mjs';
import { integer_value_0 } from '../../integer/value/0.mjs';
import { string_sub_max_property_right_index } from './max/property/right/index.mjs';
import { string_sub_max_property_left_index } from './max/property/left/index.mjs';
import { string_sub_max_property_offset } from './max/property/offset.mjs';
import { string_sub_max_starting_at } from './max/starting/at.mjs';
import { string_is } from '../is.mjs';
export function string_sub_max(left, right) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    let offset_max = integer_value_0();
    let left_index_max = integer_value_0();
    let right_index_max = integer_value_0();
    let left_index = integer_value_0();
    const left_length = string_length(left);
    const right_length = string_length(right);
    while (less_than(left_index, left_length)) {
        let right_index = integer_value_0();
        while (less_than(right_index, right_length)) {
            let offset = string_sub_max_starting_at(left, right, left_index, right_index);
            let v = offset > offset_max;
            if (v) {
                offset_max = offset;
                left_index_max = left_index;
                right_index_max = right_index;
            }
            right_index++;
        }
        left_index++;
    }
    let result = {
        [string_sub_max_property_offset()]: offset_max,
        [string_sub_max_property_left_index()]: left_index_max,
        [string_sub_max_property_right_index()]: right_index_max
    };
    return result;
    metadata([]);
}