import { function_is } from '../function/is.mjs';
import { arguments_assert_todo } from '../arguments/assert/todo.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { string_includes } from '../string/includes.mjs';
import { list_all } from '../list/all.mjs';
import { list_filter } from '../list/filter.mjs';
import { string_identifier_sub_multiple_parse } from '../string/identifier/sub/multiple/parse.mjs';
import { function_search_delimeter } from '../function/search/delimeter.mjs';
import { list_is } from '../list/is.mjs';
import { string_is } from '../string/is.mjs';
export function search_generic(candidates, query, candidate_to_string) {
    arguments_assert(arguments, [
        list_is,
        string_is,
        function_is
    ]);
    let query_map = string_identifier_sub_multiple_parse;
    let fsd = function_search_delimeter();
    let parts = query_map(query, fsd);
    let candidates_matching = list_filter(candidates, function list_filter_predicate(candidate) {
        let candidate_as_string = candidate_to_string(candidate);
        let all_parts_included = list_all(parts, function list_all_each(part) {
            let included = string_includes(candidate_as_string, part);
            return included;
        });
        return all_parts_included;
    });
    return candidates_matching;
}