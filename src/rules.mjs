import { function_suffix_async } from './function/suffix/async.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { function_search_part_last_async_not_is } from './function/search/part/last/async/not/is.mjs';
import { object_keys } from './object/keys.mjs';
export async function rules() {
    arguments_assert(arguments, []);
    const suffix = function_suffix_async();
    let needs_renaming = await function_search_part_last_async_not_is(suffix);
    for (let function_name of object_keys(needs_renaming)) {
        let replacement_suffix = 'asynk';
    }
}