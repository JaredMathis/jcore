import { function_search_generic } from './generic.mjs';
import { string_is } from '../../string/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { identity } from '../../identity.mjs';
import { string_identifier_parts_to } from '../../string/identifier/parts/to.mjs';
export async function function_search_part(query) {
    arguments_assert(arguments, [string_is]);
    let candidate_mapped_matches = list_contains;
    let query_map = identity;
    let candidate_mapper = string_identifier_parts_to;
    return await function_search_generic(query, query_map, candidate_mapped_matches, candidate_mapper);
}