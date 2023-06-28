import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { string_length } from '../../length.mjs';
export function string_length_at_least(function_name, at_least) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    return string_length(function_name) >= at_least;
    metadata([]);
}