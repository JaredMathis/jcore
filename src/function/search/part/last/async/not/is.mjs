import { boolean_value_false } from '../../../../../../boolean/value/false.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { function_search_part_generic } from '../../../generic.mjs';
import { list_last } from '../../../../../../list/last.mjs';
import { equal } from '../../../../../../equal.mjs';
import { function_name_parts_async_is } from '../../../../../name/parts/async/is.mjs';
import { string_is } from '../../../../../../string/is.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
export async function function_search_part_last_async_not_is(query) {
    arguments_assert(arguments, [string_is]);
    let candidate_mapped_matches = async function v(candidate_mapped, query_mapped) {
        let async_is = await function_name_parts_async_is(candidate_mapped);
        if (async_is) {
            let v_5 = boolean_value_false();
            return v_5;
        }
        let v_2 = list_last(candidate_mapped);
        let v_3 = equal(v_2, query_mapped);
        return v_3;
    };
    let v_4 = await function_search_part_generic(query, candidate_mapped_matches);
    return v_4;
    metadata([]);
}