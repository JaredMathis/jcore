import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { git_hub_cache_get } from './get.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { json_from } from '../../../json/from.mjs';
import { list_filter } from '../../../list/filter.mjs';
import { list_first } from '../../../list/first.mjs';
import { equal } from '../../../equal.mjs';
export async function git_hub_cache_filter(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let result = await git_hub_cache_get();
    let filtered = list_filter(result, r => {
        let jf = json_from(r);
        let function_name_actual = list_first(jf);
        return equal(function_name_actual, function_name);
    });
    return filtered;
}