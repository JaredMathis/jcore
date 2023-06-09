import { directory_read_current } from '../../../directory/read/current.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { todo } from '../../../todo.mjs';
import { version_commit_data } from '../data.mjs';
import { version_commit_files } from '../files.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
export async function version_commit_files_all(repository_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let file_paths = await directory_read_current();
    await version_commit_files(repository_name, file_paths, version_commit_data(todo, arguments));
}