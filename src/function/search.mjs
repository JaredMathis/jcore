import { search_generic } from '../search/generic.mjs';
import { function_name_all_tests_not } from './name/all/tests/not.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { string_is } from '../string/is.mjs';
export async function function_search(query) {
    arguments_assert(arguments, [string_is]);
    const candidates = await function_name_all_tests_not();
    return search_generic(query, candidates);
}