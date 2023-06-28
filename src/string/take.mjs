import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { integer_value_0 } from '../integer/value/0.mjs';
import { count } from '../count.mjs';
import { string_sub } from './sub.mjs';
export function string_take(input, count) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v_2 = integer_value_0();
    let v = string_sub(input, v_2, count);
    return v;
    metadata([]);
}