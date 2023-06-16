import { function_name_separator } from '../name/separator.mjs';
import { string_is } from '../../string/is.mjs';
import { function_search } from '../search.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_replace } from '../../string/replace.mjs';
import { string_comma } from '../../string/comma.mjs';
export async function function_search_underscores(query) {
    arguments_assert(arguments, [string_is]);
    let underscore = function_name_separator();
    string_replace(query, underscore, string_comma());
    let result = await function_search(query);
    return result;
}