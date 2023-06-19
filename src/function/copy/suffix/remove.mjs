import { string_identifier_parts_from } from '../../../string/identifier/parts/from.mjs';
import { list_remove_last_verify_multiple } from '../../../list/remove/last/verify/multiple.mjs';
import { function_copy } from '../../copy.mjs';
import { string_identifier_parts_to } from '../../../string/identifier/parts/to.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_copy_suffix_remove(function_name_old, function_name_suffix) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let function_name_suffix_parts = string_identifier_parts_to(function_name_suffix);
    let function_name_old_parts = string_identifier_parts_to(function_name_old);
    list_remove_last_verify_multiple(function_name_old_parts, function_name_suffix_parts);
    let function_name_new = string_identifier_parts_from(function_name_old_parts);
    await function_copy(function_name_old, function_name_new);
}