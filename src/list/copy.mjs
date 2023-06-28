import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { integer_value_0 } from '../integer/value/0.mjs';
import { list_skip } from './skip.mjs';
export function list_copy(refactor_stack) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v_2 = integer_value_0();
    let v = list_skip(refactor_stack, v_2);
    return v;
    metadata([]);
}