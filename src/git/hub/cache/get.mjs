import { git_ignore_cache_file_paths } from '../../ignore/cache/file/paths.mjs';
import { string_base64_from } from '../../../string/base64/from.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { list_map } from '../../../list/map.mjs';
import { path_parse_name } from '../../../path/parse/name.mjs';
export async function git_hub_cache_get() {
    arguments_assert(arguments, []);
    let file_paths = await git_ignore_cache_file_paths();
    let mapped = list_map(file_paths, path_parse_name);
    let mapped2 = list_map(mapped, string_base64_from);
    return mapped2;
}