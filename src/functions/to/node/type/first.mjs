import { arguments_assert_todo } from '../../../../arguments/assert/todo.mjs';
import { function_name_to_node_type_first } from '../../../../function/name/to/node/type/first.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { function_name_all } from '../../../../function/name/all.mjs';
export async function functions_to_node_type_first(node_type_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    for (let function_name of await function_name_all()) {
        let result = await function_name_to_node_type_first(function_name, node_type_name);
        return result;
    }
}