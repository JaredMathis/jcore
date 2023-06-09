import { git_ignore_filter } from '../../../git/ignore/filter.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { todo } from '../../../todo.mjs';
import { version_commit_data } from '../data.mjs';
import { version_commit_files } from '../files.mjs';
import { directory_read } from '../../../directory/read.mjs';
import { directory_current } from '../../../directory/current.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
export async function version_commit_files_all(repository_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let directory_path = directory_current();
    let file_paths = await directory_read(directory_path);
    let filtered = await git_ignore_filter(file_paths);
    await version_commit_files(repository_name, filtered, version_commit_data(todo, arguments));
}