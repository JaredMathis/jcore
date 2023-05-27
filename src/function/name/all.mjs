import { directory_read } from "../../directory/read.mjs";
import { array_filter } from "../../array/filter.mjs";
import { string_ends_with } from "../../string/ends/with.mjs";

export async function function_name_all() {
    let result = await directory_read('.');
    let filtered = array_filter(result, a => string_ends_with(a, '.mjs'));
    return filtered;
}