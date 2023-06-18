import { js_call_expression_arguments_get } from '../../../js/call/expression/arguments/get.mjs';
import { js_visit_nodes_call_expression_name_equal } from '../../../js/visit/nodes/call/expression/name/equal.mjs';
import { arguments_assert_todo } from '../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { refactor_import_fix } from '../../import/fix.mjs';
export async function refactor_input_caller_generic(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {args_change, function_name_called, parsed} = args;
    js_visit_nodes_call_expression_name_equal(parsed, function_name_called, function v(node) {
        let args = js_call_expression_arguments_get(node);
        args_change(args);
    });
    await refactor_import_fix(args);
}