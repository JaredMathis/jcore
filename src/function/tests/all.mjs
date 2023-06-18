import { string_identifier_is } from '../../string/identifier/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { string_function_name_prefix_starts_with } from '../../string/function/name/prefix/starts/with.mjs';
import { function_tests_filtered } from './filtered.mjs';
import { list_filter } from '../../list/filter.mjs';
export async function function_tests_all(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let v = await function_tests_filtered(filter);
    return v;
    function filter(all) {
        let v_2 = list_filter(all, function v_3(a) {
            return string_function_name_prefix_starts_with(a, function_name);
        });
        return v_2;
    }
    metadata([]);
}