import { string_function_tests_name_is } from '../../string/function/tests/name/is.mjs';
import { list_filter } from '../../list/filter.mjs';
import { file_js_all } from '../../file/js/all.mjs';
export async function function_all_tests() {
    let all = await file_js_all();
    return list_filter(all, string_function_tests_name_is);
}