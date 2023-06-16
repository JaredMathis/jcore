import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { range } from '../../range.mjs';
import { string_length } from '../length.mjs';
export function string_equal_count(a, b) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let a_length = string_length(a);
    let b_length = string_length(b);
    for (let i of range(number_min(a_length, b_length))) {
    }
}