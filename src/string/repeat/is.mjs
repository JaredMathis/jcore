import { integer_even_is } from '../../integer/even/is.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_length } from '../length.mjs';
import { not } from '../../not.mjs';
export function string_repeat_is(input) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let length = string_length(input);
    if (not(integer_even_is(length))) {
    }
}