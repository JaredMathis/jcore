import { function_name_to_file_path } from '../name/to/file/path.mjs';
import { list_string_to_dictionary } from '../../list/string/to/dictionary.mjs';
import { search_query_map_default } from '../../search/query/map/default.mjs';
import { search_candidate_as_string_matches_default } from '../../search/candidate/as/string/matches/default.mjs';
import { identity } from '../../identity.mjs';
import { search_generic } from '../../search/generic.mjs';
import { function_name_all_tests_not } from '../name/all/tests/not.mjs';
export async function function_search_generic(query) {
    const candidates = await function_name_all_tests_not();
    let candidates_matching = search_generic(candidates, identity, search_candidate_as_string_matches_default, query, search_query_map_default);
    return list_string_to_dictionary(candidates_matching, function_name_to_file_path);
}