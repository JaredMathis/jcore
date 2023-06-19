import { function_is } from '../function/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { string_includes } from '../string/includes.mjs';
import { list_all } from '../list/all.mjs';
import { list_filter } from '../list/filter.mjs';
import { string_identifier_sub_multiple_parse } from '../string/identifier/sub/multiple/parse.mjs';
import { function_search_delimeter } from '../function/search/delimeter.mjs';
import { list_is } from '../list/is.mjs';
import { string_is } from '../string/is.mjs';
export function search_generic(candidates, candidate_to_string, query) {
    arguments_assert(arguments, [
        list_is,
        function_is,
        string_is
    ]);
    let parts = query_map(query);
    let candidates_matching = list_filter(candidates, function list_filter_predicate(candidate) {
        let candidate_as_string = candidate_to_string(candidate);
        return candidate_as_string_matches(candidate_as_string, parts);
    });
    return candidates_matching;
}
function query_map(query) {
    let fsd = function_search_delimeter();
    return string_identifier_sub_multiple_parse(query, fsd);
}
function candidate_as_string_matches(candidate_as_string, parts) {
    let all_parts_included = list_all(parts, function list_all_each(part) {
        let included = string_includes(candidate_as_string, part);
        return included;
    });
    return all_parts_included;
}