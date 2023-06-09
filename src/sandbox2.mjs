import { list_any } from './list/any.mjs';
import { implies } from './implies.mjs';
import { string_prefix_without } from './string/prefix/without.mjs';
import { list_map } from './list/map.mjs';
import { directory_read_directories } from './directory/read/directories.mjs';
import { log } from './log.mjs';
import { version_path_files_get } from './version/path/files/get.mjs';
import { version_commit_files_all } from './version/commit/files/all.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { directory_current } from './directory/current.mjs';
import { list_filter } from './list/filter.mjs';
import { string_starts_with } from './string/starts/with.mjs';
import { equal } from './equal.mjs';
export async function sandbox2() {
    arguments_assert(arguments, []);
    const repository_name = 'a';
    if (false)
        await version_commit_files_all(repository_name);
    let repository_files_path = version_path_files_get(repository_name);
    let paths = await directory_read_directories(repository_files_path);
    let mapped = list_map(paths, p => directory_current() + string_prefix_without(p, repository_files_path));
    console.log(mapped);
    let filtered = list_filter(mapped, m1 => !list_any(mapped, m2 => !implies(string_starts_with(m2, m1), equal(m1, m2))));
    console.log(filtered);
}