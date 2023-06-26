import { string_combine_multiple } from '../../../../string/combine/multiple.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { function_name_separator } from '../../../name/separator.mjs';
import { function_tests_generated_string } from '../string.mjs';
import { string_function_tests_sub } from '../../../../string/function/tests/sub.mjs';
export function function_tests_generated_string_sub() {
    arguments_assert(arguments, []);
    return string_combine_multiple([
        string_function_tests_sub(),
        function_tests_generated_string(),
        function_name_separator()
    ]);
    metadata([]);
}