import { log } from '../../log.mjs';
import { js_visit_nodes_call_expression_name_equal } from '../../js/visit/nodes/call/expression/name/equal.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { error } from '../../error.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export function refactor_call_replace(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {function_name_called_old, function_name_called_new} = args;
    let {parsed} = args;
    js_visit_nodes_call_expression_name_equal(parsed, function_name_called_old, n => {
        if (!js_node_is_identifier(callee)) {
            return
        }
        let name = object_property_get(callee, 'name');
    });
    error('todo: refactor_call_replace');
}