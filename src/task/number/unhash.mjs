import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { task_symbol_hash } from '../symbol/hash.mjs';
import { string_prefix_without } from '../../string/prefix/without.mjs';
export function task_number_unhash(task_number_hashed) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = task_symbol_hash();
    let v_2 = string_prefix_without(task_number_hashed, v);
    return v_2;
    metadata([]);
}