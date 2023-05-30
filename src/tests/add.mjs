import { integer_parsable } from '../integer/parsable.mjs';
import { string_function_name_to_tests_id } from '../string/function/name/to/tests/id.mjs';
import { function_tests_all } from '../function/tests/all.mjs';
import { list_map } from '../list/map.mjs';
import { log } from '../log.mjs';
import { list_filter } from '../list/filter.mjs';
import { integer_parse } from '../integer/parse.mjs';
export async function tests_add(function_name) {
    let tests_all = await function_tests_all(function_name);
    let tests_ids_all = list_map(tests_all, t => {
        return string_function_name_to_tests_id(function_name, t);
    });
    let tests_ids_all_numeric = list_filter(tests_ids_all, id => {
        return integer_parsable(id);
    });
    let test_ids_all_number = list_map(tests_ids_all_numeric, integer_parse)
    log(test_ids_all_number);
}