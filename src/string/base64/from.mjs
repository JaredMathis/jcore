import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function string_base64_from(input) {
    arguments_assert(arguments, [arguments_assert_todo]);
    return atob(input);
}