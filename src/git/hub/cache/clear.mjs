import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { git_hub_cache_filter } from './filter.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export async function git_hub_cache_clear(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let result = await git_hub_cache_filter(function_name);
    return result;
}