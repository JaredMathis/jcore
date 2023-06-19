import { identity } from '../identity.mjs';
import { function_search_generic } from './search/generic.mjs';
import { search_query_map_default } from '../search/query/map/default.mjs';
import { search_candidate_as_string_matches_default } from '../search/candidate/as/string/matches/default.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { string_is } from '../string/is.mjs';
export async function function_search(query) {
    arguments_assert(arguments, [string_is]);
    let candidate_as_string_matches = search_candidate_as_string_matches_default;
    let query_map = search_query_map_default;
    let candidate_mapper = identity;
    return await function_search_generic(query, query_map, candidate_as_string_matches, identity);
}