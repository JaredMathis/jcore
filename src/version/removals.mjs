import { metadata } from '../metadata.mjs';
import { version_files_paths } from './files/paths.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { list_without_multiple } from '../list/without/multiple.mjs';
import { directory_current_with_separator } from '../directory/current/with/separator.mjs';
import { list_map } from '../list/map.mjs';
import { git_ignore_filter } from '../git/ignore/filter.mjs';
import { string_combine } from '../string/combine.mjs';
export async function version_removals(repository_name, file_paths) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let files_current_filtered = await git_ignore_filter(file_paths);
    let files_committed = await version_files_paths(repository_name);
    let v_2 = function v(f) {
        let v_3 = directory_current_with_separator();
        let v_4 = string_combine(v_3, f);
        return v_4;
    };
    let mapped2 = list_map(files_current_filtered, v_2);
    let removals = list_without_multiple(files_committed, mapped2);
    return removals;
    metadata([]);
}