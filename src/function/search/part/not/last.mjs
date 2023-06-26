import { function_search_part_generic } from '../generic.mjs';
import { list_contains } from '../../../../list/contains.mjs';
import { list_last } from '../../../../list/last.mjs';
import { equal } from '../../../../equal.mjs';
import { string_is } from '../../../../string/is.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
export async function function_search_part_not_last(query) {
    arguments_assert(arguments, [string_is]);
    let candidate_mapped_matches = function v(candidate_mapped, query_mapped) {
        let v_5 = list_last(candidate_mapped);
        let v_4 = equal(v_5, query_mapped);
        if (v_4) {
            return false;
        }
        let v_2 = list_contains(candidate_mapped, query_mapped);
        return v_2;
    };
    let v_3 = function_search_part_generic(query, candidate_mapped_matches);
    return v_3;
}