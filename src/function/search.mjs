import { function_search_delimeter } from './search/delimeter.mjs';
import { string_identifier_sub_multiple_parse } from '../string/identifier/sub/multiple/parse.mjs';
import { function_name_all_tests_not } from './name/all/tests/not.mjs';
import { list_filter } from '../list/filter.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { string_includes } from '../string/includes.mjs';
import { string_is } from '../string/is.mjs';
import { list_all } from '../list/all.mjs';
import { list_to_dictionary } from '../list/to/dictionary.mjs';
import { function_name_to_file_path } from './name/to/file/path.mjs';
export async function function_search(query) {
    arguments_assert(arguments, [string_is]);
    let v = function_search_delimeter();
    let parts = string_identifier_sub_multiple_parse(query, v);
    const all = await function_name_all_tests_not();
    let function_names = list_filter(all, function v_3(candidate) {
        let v_2 = list_all(parts, function list_all_each(part) {
            let v_6 = string_includes(candidate, part);
            return v_6;
        });
        return v_2;
    });
    let dictionary = list_to_dictionary(function_names, function v_5(key) {
        let v_7 = function_name_to_file_path(key);
        return v_7;
    });
    return dictionary;
}