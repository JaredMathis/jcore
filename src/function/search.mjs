import { list_single } from '../list/single.mjs';
import { list_length_is_1 } from '../list/length/is/1.mjs';
import { list_filter } from '../list/filter.mjs';
import { function_name_all } from './name/all.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
import { string_includes } from '../string/includes.mjs';
export async function function_search(query) {
    arguments_assert(arguments, [string_identifier_is]);
    const all = await function_name_all();
    let substrings = list_filter(all, a => {
        return string_includes(a, query);
    });
    if (list_length_is_1(substrings)) {
        return list_single(substrings);
    }
    return substrings;
}