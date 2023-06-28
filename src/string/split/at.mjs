import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { integer_value_0 } from '../../integer/value/0.mjs';
import { string_split_at_skip } from './at/skip.mjs';
export function string_split_at(value, position) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v_2 = integer_value_0();
    let v = string_split_at_skip(value, position, v_2);
    return v;
    metadata([]);
}