import { js_nodes_get } from '../../../../../js/nodes/get.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { js_identifier_is } from '../../../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { function_parse } from '../../../../parse.mjs';
import { js_node_is_type } from '../../../../../js/node/is/type.mjs';
import { list_first } from '../../../../../list/first.mjs';
export async function function_name_to_node_type_first(function_name, node_type_name) {
    arguments_assert(arguments, [
        js_identifier_is,
        arguments_assert_todo
    ]);
    let parsed = await function_parse(function_name);
    let filtered = js_nodes_get(parsed, n => js_node_is_type(n, node_type_name));
    return list_first(filtered);
}