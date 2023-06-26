import { js_identifier_sub_multiple_parse } from '../../../js/identifier/sub/multiple/parse.mjs';
import { function_search_delimeter } from '../../../function/search/delimeter.mjs';
export function search_query_map_default(query) {
    let fsd = function_search_delimeter();
    let v = js_identifier_sub_multiple_parse(query, fsd);
    return v;
    metadata([]);
}