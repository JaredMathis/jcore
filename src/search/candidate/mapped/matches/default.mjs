import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { string_includes } from '../../../../string/includes.mjs';
import { list_all } from '../../../../list/all.mjs';
export function search_candidate_mapped_matches_default(candidate_as_string, parts) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v = function list_all_each(part) {
        let included = string_includes(candidate_as_string, part);
        return included;
    };
    let all_parts_included = list_all(parts, v);
    return all_parts_included;
    metadata([]);
}