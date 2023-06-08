import { string_starts_with } from '../../../../../../../string/starts/with.mjs';
import { list_filter } from '../../../../../../filter.mjs';
import { function_tests_prefix_get } from '../../../../../../../function/tests/prefix/get.mjs';
export function list_filter_function_names_starts_with_tests_prefix(function_names, function_name) {
    let function_name_tests_prefix = function_tests_prefix_get(function_name);
    let filtered = list_filter(function_names, a => string_starts_with(a, function_name_tests_prefix));
    return filtered;
}