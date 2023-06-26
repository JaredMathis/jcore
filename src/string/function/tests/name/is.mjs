import { and } from '../../../../and.mjs';
import { string_is } from '../../../is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { string_includes } from '../../../includes.mjs';
import { string_function_tests_sub } from '../sub.mjs';
import { js_identifier_is } from '../../../../js/identifier/is.mjs';
export function string_function_tests_name_is(a) {
    arguments_assert(arguments, [string_is]);
    let v = js_identifier_is(a);
    let v_4 = string_function_tests_sub();
    let v_2 = string_includes(a, v_4);
    let v_3 = and(v, v_2);
    return v_3;
    metadata([]);
}