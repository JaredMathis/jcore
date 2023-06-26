import { less_than } from '../../../../less/than.mjs';
import { equal_not } from '../../../../equal/not.mjs';
import { and } from '../../../../and.mjs';
import { integer_value_0 } from '../../../../integer/value/0.mjs';
export function string_sub_max_starting_at(left, right, left_index, right_index) {
    let left_walker = left_index;
    let right_walker = right_index;
    let offset;
    for (offset = integer_value_0(); and(less_than(left_walker + offset, left.length), less_than(right_walker + offset, right.length)); offset++) {
        let left_offset = left[left_walker + offset];
        let right_offset = right[right_walker + offset];
        let v = equal_not(left_offset, right_offset);
        if (v) {
            break;
        }
    }
    return offset;
}