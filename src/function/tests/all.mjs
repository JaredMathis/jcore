import { string_function_name_prefix_starts_with } from '../../string/function/name/prefix/starts/with.mjs';
import { function_tests_filtered } from './filtered.mjs';
import { list_filter } from '../../list/filter.mjs';
export async function function_tests_all(function_name) {
    return await function_tests_filtered(filter);
    function filter(all) {
        return list_filter(all, a => string_function_name_prefix_starts_with(a, function_name));
    }
}