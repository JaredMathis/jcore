import { string_identifier_suffix_remove } from '../../../string/identifier/suffix/remove.mjs';
import { function_copy } from '../../copy.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function function_copy_suffix_remove(function_name_old, function_name_suffix) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let function_name_new = string_identifier_suffix_remove(function_name_old, function_name_suffix);
    await function_copy(function_name_old, function_name_new);
}