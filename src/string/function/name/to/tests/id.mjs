import { js_identifier_is } from '../../../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../metadata.mjs';
import { function_tests_prefix_get } from '../../../../../function/tests/prefix/get.mjs';
import { string_prefix_without } from '../../../../prefix/without.mjs';
import { js_identifier_sub_is } from '../../../../../js/identifier/sub/is.mjs';
export function string_function_name_to_tests_id(function_name, t) {
    arguments_assert(arguments, [
        js_identifier_is,
        js_identifier_sub_is
    ]);
    let function_tests_prefix = function_tests_prefix_get(function_name);
    let v = string_prefix_without(t, function_tests_prefix);
    return v;
    metadata([]);
}