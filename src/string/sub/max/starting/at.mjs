import { metadata } from '../../../../metadata.mjs';
import { add } from '../../../../add.mjs';
import { less_than } from '../../../../less/than.mjs';
import { equal_not } from '../../../../equal/not.mjs';
import { and } from '../../../../and.mjs';
import { integer_value_0 } from '../../../../integer/value/0.mjs';
export function string_sub_max_starting_at(left, right, left_index, right_index) {
    let left_walker = left_index;
    let right_walker = right_index;
    let offset= integer_value_0();
    function test() {
        return and(less_than(add(left_walker, offset), left.length), less_than(add(right_walker, offset), right.length));
    }
    for ( ; test(); ) {
        let left_offset = left[add(left_walker, offset)];
        let right_offset = right[add(right_walker, offset)];
        let v = equal_not(left_offset, right_offset);
        if (v) {
            break;
        }
        offset++
    }
    return offset;
    metadata([]);
}