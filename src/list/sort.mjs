import { subtract } from '../subtract.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export function list_sort(removals) {
    arguments_assert(arguments, [arguments_assert_todo]);
    removals.sort((a, b) => subtract(a, b));
}