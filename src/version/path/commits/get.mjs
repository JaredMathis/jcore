import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { version_path_sub_get } from '../sub/get.mjs';
import { version_path_commits } from '../commits.mjs';
export function version_path_commits_get(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let repository_commits_directory_name = version_path_commits();
    let repository_sub_path = version_path_sub_get(repository_name, repository_commits_directory_name);
    return repository_sub_path;
    metadata([]);
}