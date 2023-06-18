import { file_json_write } from '../../file/json/write.mjs';
import { file_json_read } from '../../file/json/read.mjs';
import { file_exists } from '../../file/exists.mjs';
import { git_hub_cache_file_path } from './cache/file/path.mjs';
import { git_ignore_cache } from '../ignore/cache.mjs';
import { git_ignore_add_if_not_exists } from '../ignore/add/if/not/exists.mjs';
import { defined_is } from '../../defined/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { function_is } from '../../function/is.mjs';
export async function git_hub_cached(fn, args, lambda) {
    arguments_assert(arguments, [
        function_is,
        defined_is,
        function_is
    ]);
    let v = git_ignore_cache();
    await git_ignore_add_if_not_exists(v);
    let file_path = git_hub_cache_file_path(fn, args);
    if (await file_exists(file_path)) {
        let result = await file_json_read(file_path);
        return result;
    }
    let issues = await lambda();
    await file_json_write(file_path, issues);
    return issues;
}