import { js_visit_nodes_call_expression_name_equal } from '../../../js/visit/nodes/call/expression/name/equal.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { error } from '../../../error.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function refactor_input_add_caller(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {input_name, function_declaration, function_name_called} = args;
    error('todo: refactor_input_add_caller');
    js_visit_nodes_call_expression_name_equal(args, function_name_called, v => {
        
    });
}