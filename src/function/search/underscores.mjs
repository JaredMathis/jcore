import { string_is } from '../../string/is.mjs';
import { function_search } from '../search.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_search_underscores(query) {
    arguments_assert(arguments, [string_is]);
    let result = await function_search(query);
    return result;
}