import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { metadata } from '../metadata.mjs';
export function lambda_get(value) {
    arguments_assert(arguments, [arguments_assert_todo]);
    return function v(input) {
        return value;
    };
    metadata([]);
}