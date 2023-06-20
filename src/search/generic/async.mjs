import { metadata_generated } from '../../metadata/generated.mjs';
import { metadata } from '../../metadata.mjs';
import { list_filter } from '../../list/filter.mjs';
import { string_is } from '../../string/is.mjs';
import { function_is } from '../../function/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function search_generic(candidates_get, candidate_mapper, candidate_mapped_matches, query, query_map) {
    arguments_assert(arguments, [
        function_is,
        function_is,
        function_is,
        string_is,
        function_is
    ]);
    let candidates = candidates_get();
    let query_mapped = query_map(query);
    let candidates_matching = list_filter(candidates, async function list_filter_predicate(candidate) {
        let candidate_mapped = candidate_mapper(candidate);
        return candidate_mapped_matches(candidate_mapped, query_mapped);
    });
    return candidates_matching;
    metadata([metadata_generated()]);
}