import { function_name_get } from '../../function/name/get.mjs';
import { file_path_json } from '../../file/path/json.mjs';
import { string_base64_to } from '../../string/base64/to.mjs';
import { json_to_minimized } from '../../json/to/minimized.mjs';
import { git_ignore_cache } from '../../git/ignore/cache.mjs';
import { function_is } from '../../function/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { defined_is } from '../../defined/is.mjs';
export function cached_file_path(fn, args) {
    arguments_assert(arguments, [
        function_is,
        defined_is
    ]);
    let together = [
        function_name_get(fn),
        args
    ];
    let json = json_to_minimized(together);
    let name = string_base64_to(json);
    let c = git_ignore_cache();
    let file_path = file_path_json(c, name);
    return file_path;
}