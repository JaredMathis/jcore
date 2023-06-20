import { list_filter_async } from '../../list/filter/async.mjs';
import { string_is } from '../../string/is.mjs';
import { function_is } from '../../function/is.mjs';
import { list_is } from '../../list/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function search_generic_async(candidates, candidate_mapper, candidate_mapped_matches, query, query_map) {
    arguments_assert(arguments, [
        list_is,
        function_is,
        function_is,
        string_is,
        function_is
    ]);
    let query_mapped = query_map(query);
    let candidates_matching = await list_filter_async(candidates, async function list_filter_predicate(candidate) {
        let candidate_mapped = await candidate_mapper(candidate);
        return await candidate_mapped_matches(candidate_mapped, query_mapped);
    });
    return candidates_matching;
}