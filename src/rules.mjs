import { function_suffix_async } from './function/suffix/async.mjs';
import { arguments_assert } from './arguments/assert.mjs';
import { function_search_part_last_async_not_is } from './function/search/part/last/async/not/is.mjs';
export function rules() {
    arguments_assert(arguments, []);
    function_search_part_last_async_not_is(function_suffix_async());
}