import { js_visit_nodes_types_get } from '../../js/visit/nodes/types/get.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function refactor_variable_set(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {parsed} = args;
    return js_visit_nodes_types_get(parsed);
}