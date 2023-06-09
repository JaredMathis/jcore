import { todo } from './todo.mjs';
import { version_commit_data } from './version/commit/data.mjs';
import { version_commit_files } from './version/commit/files.mjs';
import { directory_read } from './directory/read.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { directory_current } from './directory/current.mjs';
export async function sandbox2() {
    arguments_assert(arguments, []);
    const repository_name = 'a';
    let directory_path = directory_current();
    let file_paths = await directory_read(directory_path);
    await version_commit_files(repository_name, file_paths, version_commit_data(todo, arguments));
}