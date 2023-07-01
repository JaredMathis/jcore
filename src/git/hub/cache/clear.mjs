import { path_join } from '../../../path/join.mjs';
import { file_rename } from '../../../file/rename.mjs';
import { file_paths_to_name_base64 } from '../../../file/paths/to/name/base64.mjs';
import { git_ignore_cache_file_paths } from '../../ignore/cache/file/paths.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { git_hub_cache_filter } from './filter.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_filter } from '../../../list/filter.mjs';
import { list_single } from '../../../list/single.mjs';
import { list_contains } from '../../../list/contains.mjs';
export async function git_hub_cache_clear(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let filtered = await git_hub_cache_filter(function_name);
    let file_paths = await git_ignore_cache_file_paths();
    let file_paths_filtered = list_filter(file_paths, function v(f) {
        let b64 = list_single(file_paths_to_name_base64([f]));
        return list_contains(filtered, b64);
    });
    for (let file_path_old of file_paths_filtered) {
        let file_path_new = path_join([
            'delete',
            file_path_old
        ]);
        await file_rename(file_path_old, file_path_new);
    }
    return file_paths_filtered;
}