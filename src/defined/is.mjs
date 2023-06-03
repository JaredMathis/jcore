import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { tautology } from '../tautology.mjs';
export function defined_is(variable) {
    arguments_assert(arguments, [tautology]);
    if (false)
        arguments_assert_todo;
    return typeof variable !== 'undefined';
}