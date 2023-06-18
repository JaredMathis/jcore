import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { equal } from '../../equal.mjs';
export function integer_zero_is(a) {
    arguments_assert(arguments, [arguments_assert_todo]);
    return equal(a, 0);
}