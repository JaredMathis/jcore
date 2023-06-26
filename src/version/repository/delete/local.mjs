import { metadata } from '../../../metadata.mjs';
import { directory_delete } from '../../../directory/delete.mjs';
import { version_path_repository } from '../../path/repository.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function version_repository_delete_local(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let repository_path = version_path_repository(repository_name);
    await directory_delete(repository_path);
    metadata([]);
}