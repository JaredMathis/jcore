import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
export function string_to_case_upper(c) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = c.toUpperCase();
    return v;
    metadata([]);
}