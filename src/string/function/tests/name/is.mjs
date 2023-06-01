import { tautology } from '../../../../tautology.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { string_includes } from '../../../includes.mjs';
import { string_function_tests_sub } from '../sub.mjs';
export function string_function_tests_name_is(a) {
    arguments_assert(arguments, [tautology]);
    return string_includes(a, string_function_tests_sub());
    metadata([]);
}