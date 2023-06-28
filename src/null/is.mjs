import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
import { equal } from '../equal.mjs';
export function null_is(result) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v_2 = null;
    let v = equal(result, v_2);
    return v;
    metadata([]);
}