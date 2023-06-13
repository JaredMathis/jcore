import { js_list_add_identifier } from '../../../js/list/add/identifier.mjs';
import { js_call_expression_arguments } from '../../../js/call/expression/arguments.mjs';
import { js_visit_nodes_call_expression_name_equal } from '../../../js/visit/nodes/call/expression/name/equal.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { error } from '../../../error.mjs';
export function refactor_input_add_caller(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {input_name, function_declaration, function_name_called, parsed} = args;
    js_visit_nodes_call_expression_name_equal(parsed, function_name_called, node => {
        let args = js_call_expression_arguments(node);
        js_list_add_identifier(args, input_name);
    });
}