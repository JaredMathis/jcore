import { file_paths_to_name_base64 } from '../../../file/paths/to/name/base64.mjs';
import { git_ignore_cache_file_paths } from '../../ignore/cache/file/paths.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { git_hub_cache_filter } from './filter.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_filter } from '../../../list/filter.mjs';
import { list_single } from '../../../list/single.mjs';
import { list_contains } from '../../../list/contains.mjs';
import { string_base64_from } from '../../../string/base64/from.mjs';
export async function git_hub_cache_clear(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let filtered = await git_hub_cache_filter(function_name);
    console.log({filtered})
    let file_paths = await git_ignore_cache_file_paths();
    let file_paths_filtered = list_filter(file_paths, function v(f) {
        let b64 = list_single(file_paths_to_name_base64([f]));
        return list_contains(filtered, b64);
    });
    return file_paths_filtered;
}