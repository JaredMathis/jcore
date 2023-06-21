import { function_search_generic } from '../generic.mjs';
import { js_identifier_parts_to } from '../../../js/identifier/parts/to.mjs';
import { identity } from '../../../identity.mjs';
export async function function_search_part_generic(query, candidate_mapped_matches) {
    let query_map = identity;
    let candidate_mapper = js_identifier_parts_to;
    let v = await function_search_generic(query, query_map, candidate_mapped_matches, candidate_mapper);
    return v;
}