import { function_is } from '../function/is.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { function_name_to_file_path } from '../function/name/to/file/path.mjs';
import { value_get } from '../value/get.mjs';
import { list_to_dictionary } from '../list/to/dictionary.mjs';
import { string_includes } from '../string/includes.mjs';
import { list_all } from '../list/all.mjs';
import { list_filter } from '../list/filter.mjs';
import { string_identifier_sub_multiple_parse } from '../string/identifier/sub/multiple/parse.mjs';
import { function_search_delimeter } from '../function/search/delimeter.mjs';
export function search_generic(candidates, query, candidate_to_string) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        function_is
    ]);
    let fsd = function_search_delimeter();
    let parts = string_identifier_sub_multiple_parse(query, fsd);
    let candidates_matching = list_filter(candidates, function list_filter_predicate(candidate) {
        let all_parts_included = list_all(parts, function list_all_each(part) {
            let included = string_includes(candidate, part);
            return included;
        });
        return all_parts_included;
    });
    let dictionary = list_to_dictionary(candidates_matching, function value_get(key) {
        let value = function_name_to_file_path(key);
        return value;
    });
    return dictionary;
}