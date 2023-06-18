import { string_identifier_is } from '../../../../identifier/is.mjs';
import { string_is } from '../../../../is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { function_tests_prefix_get } from '../../../../../function/tests/prefix/get.mjs';
import { string_prefix_without } from '../../../../prefix/without.mjs';
import { string_identifier_sub_is } from '../../../../identifier/sub/is.mjs';
export function string_function_name_to_tests_id(function_name, t) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_sub_is
    ]);
    let function_tests_prefix = function_tests_prefix_get(function_name);
    let v = string_prefix_without(t, function_tests_prefix);
    return v;
    metadata([]);
}