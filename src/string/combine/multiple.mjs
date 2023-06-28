import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { string_combine } from '../combine.mjs';
export function string_combine_multiple(strings) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let function_name = '';
    for (let s of strings) {
        function_name = string_combine(function_name, s);
    }
    return function_name;
    metadata([]);
}