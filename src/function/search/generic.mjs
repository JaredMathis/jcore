import { function_is } from '../is.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { function_name_to_file_path } from '../name/to/file/path.mjs';
import { list_string_to_dictionary } from '../../list/string/to/dictionary.mjs';
import { identity } from '../../identity.mjs';
import { search_generic } from '../../search/generic.mjs';
import { function_name_all_tests_not } from '../name/all/tests/not.mjs';
export async function function_search_generic(query, query_map, candidate_mapped_matches, candidate_mapper) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        function_is
    ]);
    const candidates = await function_name_all_tests_not();
    let candidates_matching = search_generic(candidates, candidate_mapper, candidate_mapped_matches, query, query_map);
    return list_string_to_dictionary(candidates_matching, function_name_to_file_path);
}