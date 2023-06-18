import { function_name_all } from '../name/all.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { string_function_tests_name_is } from '../../string/function/tests/name/is.mjs';
import { list_filter } from '../../list/filter.mjs';
export async function function_all_tests() {
    arguments_assert(arguments, []);
    let all = await function_name_all();
    let v = list_filter(all, string_function_tests_name_is);
    return v;
    metadata([]);
}