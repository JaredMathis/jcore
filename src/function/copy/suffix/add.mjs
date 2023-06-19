import { list_remove_last_verify_multiple } from '../../../list/remove/last/verify/multiple.mjs';
import { string_identifier_parts_from } from '../../../string/identifier/parts/from.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { function_copy_suffix_change } from './change.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_add_beginning } from '../../../list/add/beginning.mjs';
import { string_identifier_parts_to } from '../../../string/identifier/parts/to.mjs';
import { json_to } from '../../../json/to.mjs';
export async function function_copy_suffix_add(function_name_prefix, function_name_suffix) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let function_name_suffix_parts = string_identifier_parts_to(function_name_suffix);
    let function_name_old_parts = string_identifier_parts_to(function_name_prefix);
    list_remove_last_verify_multiple(function_name_old_parts, function_name_suffix_parts);
    list_add_beginning(function_name_suffix_parts, function_name_prefix);
    let function_name_suffix_to = string_identifier_parts_from(function_name_suffix_parts);
    error(json_to({function_name_prefix, function_name_suffix_from, function_name_suffix_to}))
    await function_copy_suffix_change(function_name_prefix, function_name_suffix_from, function_name_suffix_to);
}