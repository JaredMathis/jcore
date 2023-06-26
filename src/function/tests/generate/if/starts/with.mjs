import { metadata } from '../../../../../metadata.mjs';
import { function_tests_generate_count_default } from '../../count/default.mjs';
import { function_name_all_tests_not } from '../../../../name/all/tests/not.mjs';
import { function_tests_generate_after } from '../../after.mjs';
import { function_tests_generate_generic } from '../../generic.mjs';
import { string_starts_with } from '../../../../../string/starts/with.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { js_identifier_sub_is } from '../../../../../js/identifier/sub/is.mjs';
import { list_filter } from '../../../../../list/filter.mjs';
export async function function_tests_generate_if_starts_with(prefix) {
    arguments_assert(arguments, [js_identifier_sub_is]);
    let names = await function_name_all_tests_not();
    let v_4 = function v_2(n) {
        let v_3 = string_starts_with(n, prefix);
        return v_3;
    };
    let starts_with = list_filter(names, v_4);
    for (let function_name of starts_with) {
        let v = function_tests_generate_count_default();
        await function_tests_generate_generic(function_name, v);
    }
    await function_tests_generate_after();
    metadata([]);
}