import { list_filter } from '../../list/filter.mjs';
import { file_js_all } from '../../file/js/all.mjs';
import { string_function_tests_name_is } from '../../string/function/tests/name/is.mjs';
import { string_starts_with } from '../../string/starts/with.mjs';
import { function_name_separator } from '../name/separator.mjs';
export async function function_tests_all(function_name) {
    return await function_tests_filtered(filter);
    function filter(all) {
        return list_filter(all, a => string_starts_with(a, function_name + function_name_separator()));
    }
}
async function function_tests_filtered(filter) {
    let all = await file_js_all();
    let filtered2 = list_filter(all, string_function_tests_name_is);
    let filtered = filter(filtered2);
    return filtered2;
}