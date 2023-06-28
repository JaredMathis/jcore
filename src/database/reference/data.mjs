import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
export function database_reference_data(info) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = info.data();
    return v;
    metadata([]);
}