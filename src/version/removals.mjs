import { list_without_multiple } from '../list/without/multiple.mjs';
import { directory_current_with_separator } from '../directory/current/with/separator.mjs';
import { equal } from '../equal.mjs';
import { string_starts_with } from '../string/starts/with.mjs';
import { implies } from '../implies.mjs';
import { list_all } from '../list/all.mjs';
import { list_filter } from '../list/filter.mjs';
import { string_prefix_without } from '../string/prefix/without.mjs';
import { list_map } from '../list/map.mjs';
import { directory_current } from '../directory/current.mjs';
import { directory_read_directories } from '../directory/read/directories.mjs';
import { path_exists } from '../path/exists.mjs';
import { version_path_files_get } from './path/files/get.mjs';
import { git_ignore_filter } from '../git/ignore/filter.mjs';
export async function version_removals(repository_name, file_paths) {
    let files_current_filtered = await git_ignore_filter(file_paths);
    let repository_files_path = version_path_files_get(repository_name);
    let paths;
    if (await path_exists(repository_files_path)) {
        paths = await directory_read_directories(repository_files_path);
    } else {
        paths = [];
    }
    let dc = directory_current();
    let mapped = list_map(paths, p => dc + string_prefix_without(p, repository_files_path));
    let files_committed = list_filter(mapped, m1 => list_all(mapped, m2 => implies(string_starts_with(m2, m1), equal(m1, m2))));
    let mapped2 = list_map(files_current_filtered, f => directory_current_with_separator() + f);
    let removals = list_without_multiple(files_committed, mapped2);
    return removals;
}