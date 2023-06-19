import { string_identifier_sub_multiple_parse } from '../../../string/identifier/sub/multiple/parse.mjs';
import { function_search_delimeter } from '../../../function/search/delimeter.mjs';
export function search_query_map_default(query) {
    let fsd = function_search_delimeter();
    return string_identifier_sub_multiple_parse(query, fsd);
}