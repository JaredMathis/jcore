import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function defined_is(variable) {
    arguments_assert(arguments, [arguments_assert_todo]);
    return typeof variable !== 'undefined';
}