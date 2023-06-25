import { integer_value_0 } from '../../../../integer/value/0.mjs';
export function string_sub_max_starting_at(left, right, left_index, right_index) {
    let left_walker = left_index;
    let right_walker = right_index;
    let offset;
    for (offset = integer_value_0(); left_walker + offset < left.length && right_walker + offset < right.length; offset++) {
        let left_offset = left[left_walker + offset];
        let right_offset = right[right_walker + offset];
        if (left_offset !== right_offset) {
            break;
        }
    }
    return offset;
}