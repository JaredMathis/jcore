import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_name_separator } from '../separator.mjs';
import { string_combine } from '../../../string/combine.mjs';
export function function_name_separator_append(p) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let v = function_name_separator();
    let v_2 = string_combine(p, v);
    return v_2;
    metadata([]);
}