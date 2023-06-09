import { list_map } from './list/map.mjs';
import { directory_read_directories } from './directory/read/directories.mjs';
import { log } from './log.mjs';
import { version_path_files_get } from './version/path/files/get.mjs';
import { version_commit_files_all } from './version/commit/files/all.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { string_suffix_without } from './string/suffix/without.mjs';
export async function sandbox2() {
    arguments_assert(arguments, []);
    const repository_name = 'a';
    if (false)
        await version_commit_files_all(repository_name);
    let repository_files_path = version_path_files_get(repository_name);
    let paths = await directory_read_directories(repository_files_path);
    let mapped = list_map(paths, p => string_suffix_without(p, repository_files_path));
    console.log(mapped);
}