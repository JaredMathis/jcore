import { file_json_overwrite } from '../file/json/overwrite.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { file_json_write } from '../file/json/write.mjs';
import { file_json_read } from '../file/json/read.mjs';
import { file_exists } from '../file/exists.mjs';
import { git_ignore_add_if_not_exists } from '../git/ignore/add/if/not/exists.mjs';
import { git_ignore_cache } from '../git/ignore/cache.mjs';
import { cached_file_path } from './file/path.mjs';
export async function cached_generic(fn, args, lambda, no_cache) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let cache = !no_cache;
    let file_path = cached_file_path(fn, args);
    if (cache) {
        let v = git_ignore_cache();
        await git_ignore_add_if_not_exists(v);
        let v_2 = await file_exists(file_path);
        if (v_2) {
            let result = await file_json_read(file_path);
            return result;
        }
    }
    let result = await lambda();
    let lambda_file_json_write = file_json_write;
    if (no_cache) {
        lambda_file_json_write = file_json_overwrite;
    }
    await lambda_file_json_write(file_path, result);
    return result;
}