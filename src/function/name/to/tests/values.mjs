import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { string_combine } from '../../../../string/combine.mjs';
export function function_name_to_tests_values(n) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let ending = '_tests_values';
    let v = string_combine(n, ending);
    return v;
    metadata([]);
}