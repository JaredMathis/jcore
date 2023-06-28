import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { add } from '../../../../add.mjs';
import { less_than } from '../../../../less/than.mjs';
import { equal_not } from '../../../../equal/not.mjs';
import { and } from '../../../../and.mjs';
import { integer_value_0 } from '../../../../integer/value/0.mjs';
export function string_sub_max_starting_at(left, right, left_index, right_index) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let left_walker = left_index;
    let right_walker = right_index;
    let offset = integer_value_0();
    function test() {
        let v_5 = add(left_walker, offset);
        let v_6 = left.length;
        let v_2 = less_than(v_5, v_6);
        let v_7 = add(right_walker, offset);
        let v_8 = right.length;
        let v_3 = less_than(v_7, v_8);
        let v_4 = and(v_2, v_3);
        return v_4;
    }
    while (test()) {
        let left_offset = left[add(left_walker, offset)];
        let right_offset = right[add(right_walker, offset)];
        let v = equal_not(left_offset, right_offset);
        if (v) {
            break;
        }
        offset++;
    }
    return offset;
    metadata([]);
}