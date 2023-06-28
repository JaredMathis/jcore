import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { string_length } from '../../string/length.mjs';
import { list_map } from '../map.mjs';
export function list_string_lengths(inputs) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = list_map(inputs, string_length);
    return v;
    metadata([]);
}