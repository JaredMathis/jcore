import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { metadata } from '../../../metadata.mjs';
import { js_identifier_sub_multiple_parse } from '../../../js/identifier/sub/multiple/parse.mjs';
import { function_search_delimeter } from '../../../function/search/delimeter.mjs';
export function search_query_map_default(query) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let fsd = function_search_delimeter();
    let v = js_identifier_sub_multiple_parse(query, fsd);
    return v;
    metadata([]);
}