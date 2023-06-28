import { arguments_assert_todo } from '../../../../../../../../arguments/assert/todo.mjs';
import { error } from '../../../../../../../../error.mjs';
import { arguments_assert } from '../../../../../../../../arguments/assert.mjs';
import { log } from '../../../../../../../../log.mjs';
import { js_function_declaration_to_name } from '../../../../../../../../js/function/declaration/to/name.mjs';
export function refactor_arguments_assert_call_expression_to_function_is_type(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {function_declaration} = args
    let function_name = js_function_declaration_to_name(function_declaration)
    error('todo: refactor_arguments_assert_call_expression_to_function_is_type');
}