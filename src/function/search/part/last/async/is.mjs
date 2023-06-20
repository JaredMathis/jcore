import { string_identifier_parts_from } from '../../../../../string/identifier/parts/from.mjs';
import { js_node_property_async_get } from '../../../../../js/node/property/async/get.mjs';
import { function_name_to_declaration } from '../../../../name/to/declaration.mjs';
import { function_search_part_generic } from '../../generic.mjs';
import { list_last } from '../../../../../list/last.mjs';
import { equal } from '../../../../../equal.mjs';
import { string_is } from '../../../../../string/is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function function_search_part_last_async_is(query) {
    arguments_assert(arguments, [string_is]);
    let candidate_mapped_matches = async function v(candidate_mapped, query_mapped) {
        let function_name = string_identifier_parts_from(candidate_mapped);
        let fd = await function_name_to_declaration(function_name);
        let async_is = js_node_property_async_get(fd);
        if (!async_is) {
            return false;
        }
        return equal(list_last(candidate_mapped), query_mapped);
    };
    return await function_search_part_generic(query, candidate_mapped_matches);
}