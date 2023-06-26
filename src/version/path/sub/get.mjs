import { metadata } from '../../../metadata.mjs';
import { version_path_repository } from '../repository.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { path_join } from '../../../path/join.mjs';
export function version_path_sub_get(repository_name, sub_name) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let repository_directory = version_path_repository(repository_name);
    let v = [
        repository_directory,
        sub_name
    ];
    let repository_sub_path = path_join(v);
    return repository_sub_path;
    metadata([]);
}