import { not } from '../../../../not.mjs';
import { string_function_tests_name_is } from '../../../../string/function/tests/name/is.mjs';
import { list_filter } from '../../../../list/filter.mjs';
import { function_name_all } from '../../all.mjs';
export async function function_name_all_tests_not() {
    const all = await function_name_all();
    let function_names = list_filter(all, function v(a) {
        return not(string_function_tests_name_is(a));
    });
    return function_names;
}