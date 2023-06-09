import { log } from './log.mjs';
import { version_path_files_get } from './version/path/files/get.mjs';
import { version_commit_files_all } from './version/commit/files/all.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { directory_read_non_recursive } from './directory/read/non/recursive.mjs';
export async function sandbox2() {
    arguments_assert(arguments, []);
    const repository_name = 'a';
    if (false)
        await version_commit_files_all(repository_name);
    let repository_files_path = version_path_files_get(repository_name);
    let paths = await directory_read_non_recursive(repository_files_path);
    console.log(paths);
}