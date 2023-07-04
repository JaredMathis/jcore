import { string_index_of } from '../../../index/of.mjs';
import { string_length } from '../../../length.mjs';
export function string_sub_max_to_result(first, left, right) {
    return {
        'offset': string_length(first),
        'left_index': string_index_of(left, first),
        'right_index': string_index_of(right, first)
    };
}