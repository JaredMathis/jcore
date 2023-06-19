import { string_includes } from '../../../../../string/includes.mjs';
import { list_all } from '../../../../../list/all.mjs';
export function search_candidate_as_string_matches_default(candidate_as_string, parts) {
    let all_parts_included = list_all(parts, function list_all_each(part) {
        let included = string_includes(candidate_as_string, part);
        return included;
    });
    return all_parts_included;
}