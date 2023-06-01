import { tautology } from '../../../tautology.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { string_function_tests_sub } from '../../../string/function/tests/sub.mjs';
export function function_tests_prefix_get(function_name) {
    arguments_assert(arguments, [tautology]);
    return `${ function_name }${ string_function_tests_sub() }`;
    metadata([]);
}