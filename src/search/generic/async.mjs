import { metadata } from '../../metadata.mjs';
import { list_filter_async } from '../../list/filter/async.mjs';
import { string_is } from '../../string/is.mjs';
import { function_is } from '../../function/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function search_generic_async(candidates_get, candidate_mapper, candidate_mapped_matches, query, query_map) {
    arguments_assert(arguments, [
        function_is,
        function_is,
        function_is,
        string_is,
        function_is
    ]);
    let candidates = await candidates_get();
    let query_mapped = await query_map(query);
    let v_2 = async function list_filter_predicate(candidate) {
        let candidate_mapped = await candidate_mapper(candidate);
        let v = await candidate_mapped_matches(candidate_mapped, query_mapped);
        return v;
    };
    let candidates_matching = await list_filter_async(candidates, v_2);
    return candidates_matching;
    metadata([]);
}