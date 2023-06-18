import { function_search_delimeter } from './delimeter.mjs';
import { function_name_separator } from '../name/separator.mjs';
import { string_is } from '../../string/is.mjs';
import { function_search } from '../search.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_replace } from '../../string/replace.mjs';
export async function function_search_underscores(query) {
    arguments_assert(arguments, [string_is]);
    let underscore = function_name_separator();
    let v = function_search_delimeter();
    let replaced = string_replace(query, underscore, v);
    let result = await function_search(replaced);
    return result;
}