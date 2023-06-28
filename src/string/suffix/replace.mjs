import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { string_combine } from '../combine.mjs';
import { string_suffix_without } from './without.mjs';
export function string_suffix_replace(string_old, suffix_old, suffix_new) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let suffix_without = string_suffix_without(string_old, suffix_old);
    let string_new = string_combine(suffix_without, suffix_new);
    return string_new;
    metadata([]);
}