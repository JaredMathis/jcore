import { function_search_delimeter } from './delimeter.mjs';
import { function_name_separator } from '../name/separator.mjs';
import { string_is } from '../../string/is.mjs';
import { function_search } from '../search.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_replace } from '../../string/replace.mjs';
export async function function_search_underscores(query) {
    arguments_assert(arguments, [string_is]);
    let underscore = function_name_separator();
    string_replace(query, underscore, function_search_delimeter());
    let result = await function_search(query);
    return result;
}