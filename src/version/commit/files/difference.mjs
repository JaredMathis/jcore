import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { version_file_difference } from '../../file/difference.mjs';
import { version_commit_files_generic } from './generic.mjs';
export async function version_commit_files_difference(repository_name, file_paths, commit_data) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v = await version_commit_files_generic(repository_name, file_paths, commit_data, version_file_difference);
    return v;
    metadata([]);
}