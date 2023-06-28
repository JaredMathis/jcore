import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { function_is } from '../../function/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { boolean_value_false } from '../../boolean/value/false.mjs';
import { boolean_value_true } from '../../boolean/value/true.mjs';
import { metadata } from '../../metadata.mjs';
import { equal } from '../../equal.mjs';
import { range } from '../../range.mjs';
export function string_similar_generic(other_get, range_count, target) {
    arguments_assert(arguments, [
        function_is,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    for (let i of range(range_count)) {
        let other = other_get(i);
        let v = equal(other, target);
        if (v) {
            let v_2 = boolean_value_true();
            return v_2;
        }
    }
    let v_3 = boolean_value_false();
    return v_3;
    metadata([]);
}