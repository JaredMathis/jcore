import { metadata } from '../../metadata.mjs';
import { string_function_tests_name_is } from '../../string/function/tests/name/is.mjs';
import { list_filter } from '../../list/filter.mjs';
import { file_js_all } from '../../file/js/all.mjs';
export async function function_tests_filtered(filter) {
    let all = await file_js_all();
    let filtered = list_filter(all, string_function_tests_name_is);
    let filtered2 = filter(filtered);
    return filtered2;
    metadata([]);
}