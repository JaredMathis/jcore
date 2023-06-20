import { search_query_map_default } from '../../search/query/map/default.mjs';
import { search_candidate_mapped_matches_default } from '../../search/candidate/mapped/matches/default.mjs';
import { search_generic_async } from '../../search/generic/async.mjs';
import { task_property_title_get } from '../property/title/get.mjs';
import { task_all_unsummarized } from '../all/unsummarized.mjs';
import { string_is } from '../../string/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function task_search_summarized(query) {
    arguments_assert(arguments, [string_is]);
    let candidates_get = task_all_unsummarized;
    let candidate_mapper = task_property_title_get;
    return search_generic_async(candidates_get, candidate_mapper, search_candidate_mapped_matches_default, query, search_query_map_default);
}