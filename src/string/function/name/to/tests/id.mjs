import { tautology } from '../../../../../tautology.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { function_tests_prefix_get } from '../../../../../function/tests/prefix/get.mjs';
import { string_prefix_without } from '../../../../prefix/without.mjs';
export function string_function_name_to_tests_id(function_name, t) {
    arguments_assert(arguments, [
        tautology,
        tautology
    ]);
    let function_tests_prefix = function_tests_prefix_get(function_name);
    return string_prefix_without(t, function_tests_prefix);
    metadata([]);
}