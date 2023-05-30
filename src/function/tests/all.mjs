import { function_tests_filtered } from './filtered.mjs';
import { list_filter } from '../../list/filter.mjs';
import { string_starts_with } from '../../string/starts/with.mjs';
import { function_name_separator } from '../name/separator.mjs';
export async function function_tests_all(function_name) {
    return await function_tests_filtered(filter);
    function filter(all) {
        return list_filter(all, a => string_starts_with(a, function_name + function_name_separator()));
    }
}