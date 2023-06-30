import { string_base64_from } from '../../../string/base64/from.mjs';
import { git_ignore_cache } from '../../ignore/cache.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { directory_read } from '../../../directory/read.mjs';
import { list_map } from '../../../list/map.mjs';
import { path_parse_name } from '../../../path/parse/name.mjs';
export async function git_hub_cache_get() {
    arguments_assert(arguments, []);
    let c = git_ignore_cache();
    let file_paths = await directory_read(c);
    let mapped = list_map(file_paths, path_parse_name);
    let mapped2 = list_map(mapped, string_base64_from);
    return mapped2;
}