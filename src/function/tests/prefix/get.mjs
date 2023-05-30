import { string_function_tests_sub } from '../../../string/function/tests/sub.mjs';
export function function_tests_prefix_get(function_name) {
    return `${ function_name }${ string_function_tests_sub() }`;
}