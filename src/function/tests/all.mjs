import { string_starts_with } from '../../string/starts/with.mjs';
import { function_tests_prefix_get } from './prefix/get.mjs';
import { js_identifier_is } from '../../js/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { function_tests_filtered } from './filtered.mjs';
import { list_filter } from '../../list/filter.mjs';
export async function function_tests_all(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let function_name_test_prefix = function_tests_prefix_get(function_name);
    let v = await function_tests_filtered(filter);
    return v;
    function filter(all) {
        let v_5 = function v_3(a) {
            let v_4 = string_starts_with(a, function_name_test_prefix);
            return v_4;
        };
        let v_2 = list_filter(all, v_5);
        return v_2;
    }
    metadata([]);
}