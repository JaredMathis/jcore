import { string_starts_with } from '../../string/starts/with.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { function_tests_prefix_get } from '../../function/tests/prefix/get.mjs';
import { add_1 } from '../../add/1.mjs';
import { list_max_or_0 } from '../../list/max/or/0.mjs';
import { integer_parse } from '../../integer/parse.mjs';
import { integer_parsable } from '../../integer/parsable.mjs';
import { list_filter } from '../../list/filter.mjs';
import { string_function_name_to_tests_id } from '../../string/function/name/to/tests/id.mjs';
import { list_map } from '../../list/map.mjs';
import { function_name_all } from '../../function/name/all.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
export async function tests_name_next(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let functions_all = await function_name_all();
    const prefix = function_tests_prefix_get(function_name);
    let function_name_tests = list_filter(functions_all, f => string_starts_with(f, prefix));
    let tests_ids_all = list_map(function_name_tests, t => {
        return string_function_name_to_tests_id(function_name, t);
    });
    let tests_ids_all_numeric = list_filter(tests_ids_all, id => {
        return integer_parsable(id);
    });
    let test_ids_all_number = list_map(tests_ids_all_numeric, integer_parse);
    let max = list_max_or_0(test_ids_all_number);
    let test_ids_all_number_max = add_1(max);
    let test_name = `${ function_tests_prefix_get(function_name) }${ test_ids_all_number_max }`;
    return test_name;
}