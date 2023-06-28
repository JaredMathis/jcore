import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
export function string_byte_size(s) {
    arguments_assert(arguments, [arguments_assert_todo]);
    return new Blob([s]).size;
    metadata([]);
}