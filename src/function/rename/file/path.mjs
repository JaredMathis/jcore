import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { file_rename } from '../../../file/rename.mjs';
import { function_name_to_file_path } from '../../name/to/file/path.mjs';
export async function function_rename_file_path(function_name_old, function_name_new) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let file_path_old = function_name_to_file_path(function_name_old);
    let file_path_new = function_name_to_file_path(function_name_new);
    await file_rename(file_path_old, file_path_new);
    metadata([]);
}