import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { path_join } from '../../../path/join.mjs';
import { version_path_files_get } from '../files/get.mjs';
export function version_path_file_directory(repository_name, file_path) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let repository_files_path = version_path_files_get(repository_name);
    let repository_file_path = path_join([
        repository_files_path,
        file_path
    ]);
    return repository_file_path;
}