import { function_suffix_async } from './function/suffix/async.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { function_search_part_last_async_not_is } from './function/search/part/last/async/not/is.mjs';
import { object_keys } from './object/keys.mjs';
export function rules() {
    arguments_assert(arguments, []);
    let needs_renaming = function_search_part_last_async_not_is(function_suffix_async());
    for (let function_name of object_keys(needs_renaming)) {
    }
}