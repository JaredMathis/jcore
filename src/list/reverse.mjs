import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function list_reverse(list) {
    arguments_assert(arguments, [arguments_assert_todo]);
    list.reverse();
    metadata([]);
}