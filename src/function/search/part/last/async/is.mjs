import { function_name_to_declaration } from '../../../../name/to/declaration.mjs';
import { function_search_part_generic } from '../../generic.mjs';
import { list_last } from '../../../../../list/last.mjs';
import { equal } from '../../../../../equal.mjs';
import { string_is } from '../../../../../string/is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function function_search_part_last_async_is(query) {
    arguments_assert(arguments, [string_is]);
    let candidate_mapped_matches = function v(candidate_mapped, query_mapped) {
        let fd = function_name_to_declaration();
        return equal(list_last(candidate_mapped), query_mapped);
    };
    return function_search_part_generic(query, candidate_mapped_matches);
}