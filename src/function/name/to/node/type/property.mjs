import { list_first } from '../../../../../list/first.mjs';
import { function_name_to_node_type_all } from './all.mjs';
import { arguments_assert_todo } from '../../../../../arguments/assert/todo.mjs';
import { js_identifier_is } from '../../../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
export async function function_name_to_node_type_property(function_name, node_type_name) {
    arguments_assert(arguments, [
        js_identifier_is,
        arguments_assert_todo
    ]);
    let filtered = await function_name_to_node_type_all(function_name, node_type_name);
    return list_first(filtered);
}