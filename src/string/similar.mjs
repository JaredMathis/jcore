import { string_remove_at } from './remove/at.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { range } from '../range.mjs';
import { string_length } from './length.mjs';
export function string_similar(a, b) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    for (let i of range(string_length(a))) {
        let other = string_remove_at(a, i);
    }
}