import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
export function integer_parse_try(input) {
    arguments_assert(arguments, [arguments_assert_todo]);
    return parseInt(input, 10);
    metadata([]);
}