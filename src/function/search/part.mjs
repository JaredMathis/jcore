import { function_search_generic } from './generic.mjs';
import { search_candidate_as_string_matches_default } from '../../search/candidate/as/string/matches/default.mjs';
import { string_is } from '../../string/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { identity } from '../../identity.mjs';
export async function function_search_part(query) {
    arguments_assert(arguments, [string_is]);
    let candidate_as_string_matches = candidate;
    let query_map = identity;
    return await function_search_generic(query, query_map, candidate_as_string_matches);
}