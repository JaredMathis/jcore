import { string_is } from '../../../is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { string_includes } from '../../../includes.mjs';
import { string_function_tests_sub } from '../sub.mjs';
import { string_identifier_is } from '../../../identifier/is.mjs';
export function string_function_tests_name_is(a) {
    arguments_assert(arguments, [string_is]);
    return string_identifier_is(a) && string_includes(a, string_function_tests_sub());
    metadata([]);
}