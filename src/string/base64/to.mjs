import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { error } from '../../error.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function string_base64_to(input) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = btoa(input);
    return v;
    metadata([]);
}