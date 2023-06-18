import { search_generic } from '../search/generic.mjs';
import { string_is } from '../string/is.mjs';
import { task_all } from './all.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
export async function task_search(query) {
    arguments_assert(arguments, [string_is]);
    let result = await task_all();
    return search_generic(candidates, query);
}