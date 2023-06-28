import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { equal } from '../../../equal.mjs';
import { integer_value_1 } from '../../../integer/value/1.mjs';
import { string_length } from '../../length.mjs';
export function string_length_is_1(c) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = string_length(c);
    let v_2 = integer_value_1();
    let v_3 = equal(v, v_2);
    return v_3;
    metadata([]);
}