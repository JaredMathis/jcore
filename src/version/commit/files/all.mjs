import { string_starts_with } from '../../../string/starts/with.mjs';
import { list_any } from '../../../list/any.mjs';
import { log } from '../../../log.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { todo } from '../../../todo.mjs';
import { version_commit_data } from '../data.mjs';
import { version_commit_files } from '../files.mjs';
import { directory_read } from '../../../directory/read.mjs';
import { directory_current } from '../../../directory/current.mjs';
import { git_ignore_lines } from '../../../git/ignore/lines.mjs';
import { list_filter } from '../../../list/filter.mjs';
import { string_identifier_is } from '../../../string/identifier/is.mjs';
export async function version_commit_files_all(repository_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let directory_path = directory_current();
    let file_paths = await directory_read(directory_path);
    let gil = await git_ignore_lines();
    list_filter(file_paths, f => {
        console.log(f);
        return list_any(gil, g => string_starts_with(f, g));
    });
    return;
    let filtered;
    await version_commit_files(repository_name, file_paths, version_commit_data(todo, arguments));
}