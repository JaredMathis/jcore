import { js_node_is_type } from '../../../../js/node/is/type.mjs';
import { js_nodes_get } from '../../../../js/nodes/get.mjs';
import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { function_name_all } from '../../../../function/name/all.mjs';
import { list_empty_not } from '../../../../list/empty/not.mjs';
import { list_first } from '../../../../list/first.mjs';
import { function_parse } from '../../../../function/parse.mjs';
export async function functions_to_node_type_first(node_type_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    for (let function_name of await function_name_all()) {
        let parsed = await function_parse(function_name);
        let filtered = js_nodes_get(parsed, function v_2(n) {
            return js_node_is_type(n, node_type_name);
        });
        let v = list_empty_not(filtered);
        if (v) {
            return list_first(filtered);
        }
    }
    return null;
}