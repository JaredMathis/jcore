import { js_node_is } from '../../../../../js/node/is.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { string_identifier_is } from '../../../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { function_parse } from '../../../../parse.mjs';
import { js_visit_nodes_filter } from '../../../../../js/visit/nodes/filter.mjs';
export async function function_name_to_node_type_first(function_name, node_type_name) {
    arguments_assert(arguments, [
        string_identifier_is,
        arguments_assert_todo
    ]);
    let parsed = function_parse(function_name);
    js_visit_nodes_filter(parsed, js_node_is);
    return result;
}