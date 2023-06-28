import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { file_name_json } from '../../file/name/json.mjs';
import { path_join } from '../../path/join.mjs';
import { version_path_commits_get } from './commits/get.mjs';
export function version_path_commit(repository_name, commit_version) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let repository_sub_path = version_path_commits_get(repository_name);
    let v = [
        repository_sub_path,
        file_name_json(commit_version)
    ];
    let commit_path = path_join(v);
    return commit_path;
    metadata([]);
}