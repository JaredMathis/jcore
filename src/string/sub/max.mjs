import { string_sub_max_property_right_index } from './max/property/right/index.mjs';
import { string_sub_max_property_left_index } from './max/property/left/index.mjs';
import { string_sub_max_property_offset } from './max/property/offset.mjs';
import { string_sub_max_starting_at } from './max/starting/at.mjs';
export function string_sub_max(left, right) {
    let offset_max = 0;
    let left_index_max = 0;
    let right_index_max = 0;
    for (let left_index = 0; left_index < left.length; left_index++) {
        for (let right_index = 0; right_index < right.length; right_index++) {
            let offset = string_sub_max_starting_at(left, right, left_index, right_index);
            if (offset > offset_max) {
                offset_max = offset;
                left_index_max = left_index;
                right_index_max = right_index;
            }
        }
    }
    let result = {
        [string_sub_max_property_offset()]: offset_max,
        [string_sub_max_property_left_index()]: left_index_max,
        [string_sub_max_property_right_index()]: right_index_max
    };
    return result;
}