import { version_commit_files_all_removals_generic } from './removals/generic.mjs';
import { version_write_all } from '../../../write/all.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { string_empty } from '../../../../string/empty.mjs';
import { version_file_difference_generic } from '../../../file/difference/generic.mjs';
import { directory_read } from '../../../../directory/read.mjs';
import { directory_current } from '../../../../directory/current.mjs';
export async function version_commit_files_all_removals(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let directory_path = directory_current();
    let file_paths = await directory_read(directory_path);
    let writes = await version_commit_files_all_removals_generic(file_paths, repository_name, difference_get);
    await version_write_all(writes);
    async function difference_get(repository_name, file_path) {
        return await version_file_difference_generic(repository_name, file_path, contents_new_get);
    }
    function contents_new_get() {
        return string_empty();
    }
    return writes;
}