import { string_prefix_without } from '../../../../prefix/without.mjs';
import { string_function_tests_sub } from '../../../tests/sub.mjs';
export function string_function_name_to_tests_id(function_name, t) {
    let function_tests_prefix = `${ function_name }${ string_function_tests_sub() }`;
    return string_prefix_without(t, function_tests_prefix);
}