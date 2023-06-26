import { metadata } from '../../../../metadata.mjs';
import { not } from '../../../../not.mjs';
import { string_function_tests_name_is } from '../../../../string/function/tests/name/is.mjs';
import { list_filter } from '../../../../list/filter.mjs';
import { function_name_all } from '../../all.mjs';
export async function function_name_all_tests_not() {
    const all = await function_name_all();
    let v_4 = function v(a) {
        let v_2 = string_function_tests_name_is(a);
        let v_3 = not(v_2);
        return v_3;
    };
    let function_names = list_filter(all, v_4);
    return function_names;
    metadata([]);
}