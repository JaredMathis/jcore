import { search_candidate_as_string_matches_default } from './candidate/as/string/matches/default.mjs';
import { search_query_map_default } from './query/map/default.mjs';
import { function_is } from '../function/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { list_filter } from '../list/filter.mjs';
import { list_is } from '../list/is.mjs';
import { string_is } from '../string/is.mjs';
export function search_generic(candidates, candidate_to_string, candidate_as_string_matches, query, query_map) {
    arguments_assert(arguments, [
        list_is,
        function_is,
        function_is,
        string_is,
        function_is
    ]);
    let parts = search_query_map_default(query);
    let candidates_matching = list_filter(candidates, function list_filter_predicate(candidate) {
        let candidate_as_string = candidate_to_string(candidate);
        return search_candidate_as_string_matches_default(candidate_as_string, parts);
    });
    return candidates_matching;
}