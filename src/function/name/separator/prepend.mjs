import { function_name_separator } from '../separator.mjs';
import { string_combine } from '../../../string/combine.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function function_name_separator_prepend(p) {
    arguments_assert(arguments, [arguments_assert_todo]);
    return string_combine(function_name_separator(), p);
}