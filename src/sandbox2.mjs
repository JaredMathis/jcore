import { list_without_multiple } from './list/without/multiple.mjs';
import { directory_current_with_separator } from './directory/current/with/separator.mjs';
import { log } from './log.mjs';
import { git_ignore_filter } from './git/ignore/filter.mjs';
import { implies } from './implies.mjs';
import { list_all } from './list/all.mjs';
import { string_prefix_without } from './string/prefix/without.mjs';
import { list_map } from './list/map.mjs';
import { directory_read_directories } from './directory/read/directories.mjs';
import { version_path_files_get } from './version/path/files/get.mjs';
import { version_commit_files_all } from './version/commit/files/all.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { directory_current } from './directory/current.mjs';
import { list_filter } from './list/filter.mjs';
import { string_starts_with } from './string/starts/with.mjs';
import { equal } from './equal.mjs';
import { directory_read } from './directory/read.mjs';
export async function sandbox2() {
    arguments_assert(arguments, []);
    const repository_name = 'a';
    if (false)
        await version_commit_files_all(repository_name);
    let repository_files_path = version_path_files_get(repository_name);
    let paths = await directory_read_directories(repository_files_path);
    let dc = directory_current();
    let mapped = list_map(paths, p => dc + string_prefix_without(p, repository_files_path));
    let files_committed = list_filter(mapped, m1 => list_all(mapped, m2 => implies(string_starts_with(m2, m1), equal(m1, m2))));
    let files_current = await directory_read(dc);
    let files_current_filtered = await git_ignore_filter(files_current);
    let mapped2 = list_map(files_current_filtered, f => directory_current_with_separator() + f);
    let removals = list_without_multiple(files_committed, mapped2);
    console.log(removals);
}