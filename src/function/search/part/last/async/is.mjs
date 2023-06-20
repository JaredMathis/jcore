import { function_name_parts_async_is } from '../../../../name/parts/async/is.mjs';
import { function_search_part_generic } from '../../generic.mjs';
import { list_last } from '../../../../../list/last.mjs';
import { equal } from '../../../../../equal.mjs';
import { string_is } from '../../../../../string/is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function function_search_part_last_async_is(query) {
    arguments_assert(arguments, [string_is]);
    let candidate_mapped_matches = async function v(candidate_mapped, query_mapped) {
        let async_is = await function_name_parts_async_is(candidate_mapped);
        if (!async_is) {
            return false;
        }
        return equal(list_last(candidate_mapped), query_mapped);
    };
    return await function_search_part_generic(query, candidate_mapped_matches);
}