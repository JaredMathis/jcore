import { string_combine_multiple } from '../../../../string/combine/multiple.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { function_name_separator } from '../../../name/separator.mjs';
import { function_tests_generated_string } from '../string.mjs';
import { string_function_tests_sub } from '../../../../string/function/tests/sub.mjs';
export function function_tests_generated_string_sub() {
    arguments_assert(arguments, []);
    let v = [
        string_function_tests_sub(),
        function_tests_generated_string(),
        function_name_separator()
    ];
    let v_2 = string_combine_multiple(v);
    return v_2;
    metadata([]);
}