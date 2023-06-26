import { metadata } from '../../../../metadata.mjs';
import { function_name_separator } from '../../../name/separator.mjs';
import { function_tests_generated_string } from '../string.mjs';
import { string_function_tests_sub } from '../../../../string/function/tests/sub.mjs';
export function function_tests_generated_string_sub() {
    return string_function_tests_sub() + function_tests_generated_string() + function_name_separator();
    metadata([]);
}