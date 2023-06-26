import { version_commits_path_to_integer } from './path/to/integer.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { directory_read } from '../../directory/read.mjs';
import { directory_exists_ensure } from '../../directory/exists/ensure.mjs';
import { version_path_commits_get } from '../path/commits/get.mjs';
export async function version_commits_get(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let repository_sub_path = version_path_commits_get(repository_name);
    await directory_exists_ensure(repository_sub_path);
    let existing_commits = await directory_read(repository_sub_path);
    let parsed = version_commits_path_to_integer(existing_commits);
    return parsed;
    metadata([]);
}