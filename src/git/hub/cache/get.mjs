import { file_path_to_name_base64 } from '../../../file/path/to/name/base64.mjs';
import { git_ignore_cache_file_paths } from '../../ignore/cache/file/paths.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function git_hub_cache_get() {
    arguments_assert(arguments, []);
    let file_paths = await git_ignore_cache_file_paths();
    let mapped2 = file_path_to_name_base64(file_paths);
    return mapped2;
}