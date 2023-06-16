import { string_comma } from '../string/comma.mjs';
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
    let parts = string_identifier_sub_multiple_parse(query, string_comma());
    const all = await function_name_all_tests_not();
    let function_names = list_filter(all, a => {
        return list_all(parts, p => string_includes(a, p));
    });
    let dictionary = list_to_dictionary(function_names, key => function_name_to_file_path(key));
    return dictionary;
}