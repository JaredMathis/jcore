import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { function_search_generic } from '../generic.mjs';
import { js_identifier_parts_to } from '../../../js/identifier/parts/to.mjs';
import { identity } from '../../../identity.mjs';
export async function function_search_part_generic(query, candidate_mapped_matches) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let query_map = identity;
    let candidate_mapper = js_identifier_parts_to;
    let v = await function_search_generic(query, query_map, candidate_mapped_matches, candidate_mapper);
    return v;
    metadata([]);
}