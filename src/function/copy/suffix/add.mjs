import { string_identifier_multiple_parse } from '../../../string/identifier/multiple/parse.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { function_copy_suffix } from '../suffix.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_copy_suffix_add(function_name_old, function_name_suffix) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let function_name_old_parts = string_identifier_multiple_parse(function_name_old);
    let function_name_suffix_parts = string_identifier_multiple_parse(function_name_suffix);
    function_copy_suffix(function_name_prefix, function_name_suffix_from, function_name_suffix_to);
}