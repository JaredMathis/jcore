import { metadata } from '../../../../metadata.mjs';
import { version_commit_data } from '../../data.mjs';
import { directory_read_current } from '../../../../directory/read/current.mjs';
import { version_commit_files_all_removals_generic } from './removals/generic.mjs';
import { version_write_all } from '../../../write/all.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function version_commit_files_all_removals(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let file_paths = await directory_read_current();
    const commit_data = version_commit_data(version_commit_files_all_removals, arguments);
    let writes = await version_commit_files_all_removals_generic(repository_name, file_paths, commit_data);
    await version_write_all(writes);
    return writes;
    metadata([]);
}