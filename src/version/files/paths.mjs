import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { equal } from '../../equal.mjs';
import { string_starts_with } from '../../string/starts/with.mjs';
import { implies } from '../../implies.mjs';
import { list_all } from '../../list/all.mjs';
import { list_filter } from '../../list/filter.mjs';
import { string_prefix_without } from '../../string/prefix/without.mjs';
import { list_map } from '../../list/map.mjs';
import { directory_current } from '../../directory/current.mjs';
import { directory_read_directories } from '../../directory/read/directories.mjs';
import { path_exists } from '../../path/exists.mjs';
import { version_path_files_get } from '../path/files/get.mjs';
import { string_combine } from '../../string/combine.mjs';
export async function version_files_paths(repository_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let repository_files_path = version_path_files_get(repository_name);
    let paths;
    let v_8 = await path_exists(repository_files_path);
    if (v_8) {
        paths = await directory_read_directories(repository_files_path);
    } else {
        paths = [];
    }
    let dc = directory_current();
    let v_9 = function v(p) {
        let v_11 = string_prefix_without(p, repository_files_path);
        let v_12 = string_combine(dc, v_11);
        return v_12;
    };
    let mapped = list_map(paths, v_9);
    let v_10 = function v_2(m1) {
        let v_13 = function v_3(m2) {
            let v_5 = string_starts_with(m2, m1);
            let v_6 = equal(m1, m2);
            let v_7 = implies(v_5, v_6);
            return v_7;
        };
        let v_4 = list_all(mapped, v_13);
        return v_4;
    };
    let files_committed = list_filter(mapped, v_10);
    return files_committed;
    metadata([]);
}