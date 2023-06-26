import { metadata } from '../../../../metadata.mjs';
import { string_includes } from '../../../../string/includes.mjs';
import { list_all } from '../../../../list/all.mjs';
export function search_candidate_mapped_matches_default(candidate_as_string, parts) {
    let v = function list_all_each(part) {
        let included = string_includes(candidate_as_string, part);
        return included;
    };
    let all_parts_included = list_all(parts, v);
    return all_parts_included;
    metadata([]);
}