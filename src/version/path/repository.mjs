import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { path_join } from '../../path/join.mjs';
import { version_path_root } from './root.mjs';
export function version_path_repository(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let repository_container_folder_name = version_path_root();
    let v = [
        repository_container_folder_name,
        repository_name
    ];
    let repository_directory = path_join(v);
    return repository_directory;
    metadata([]);
}