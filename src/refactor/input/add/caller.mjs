import { list_add } from '../../../list/add.mjs';
import { js_call_expression_arguments } from '../../../js/call/expression/arguments.mjs';
import { js_visit_nodes_call_expression_name_equal } from '../../../js/visit/nodes/call/expression/name/equal.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
export function refactor_input_add_caller(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {input_value_expression, function_declaration, function_name_called, parsed} = args;
    js_visit_nodes_call_expression_name_equal(parsed, function_name_called, node => {
        let args = js_call_expression_arguments(node);
        list_add(args, input_value_expression);
    });
}