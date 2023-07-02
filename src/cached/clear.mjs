import { file_delete_multiple_soft } from '../file/delete/multiple/soft.mjs';
import { file_paths_to_name_base64 } from '../file/paths/to/name/base64.mjs';
import { git_ignore_cache_file_paths } from '../git/ignore/cache/file/paths.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { cached_filter } from './filter.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { list_filter } from '../list/filter.mjs';
import { list_single } from '../list/single.mjs';
import { list_contains } from '../list/contains.mjs';
export async function cached_clear(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let filtered = await cached_filter(function_name);
    let file_paths = await git_ignore_cache_file_paths();
    let file_paths_filtered = list_filter(file_paths, function v(f) {
        let b64 = list_single(file_paths_to_name_base64([f]));
        return list_contains(filtered, b64);
    });
    await file_delete_multiple_soft(file_paths_filtered);
    return file_paths_filtered;
}