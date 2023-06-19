import { search_candidate_as_string_matches_default } from '../search/candidate/as/string/matches/default.mjs';
import { function_name_to_file_path } from './name/to/file/path.mjs';
import { identity } from '../identity.mjs';
import { search_generic } from '../search/generic.mjs';
import { function_name_all_tests_not } from './name/all/tests/not.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { string_is } from '../string/is.mjs';
import { list_string_to_dictionary } from '../list/string/to/dictionary.mjs';
export async function function_search(query) {
    arguments_assert(arguments, [string_is]);
    const candidates = await function_name_all_tests_not();
    let candidates_matching = search_generic(candidates, identity, search_candidate_as_string_matches_default, query);
    return list_string_to_dictionary(candidates_matching, function_name_to_file_path);
}