import { js_function_declaration_to_statement_arguments_assert_args_predicate } from '../../../../../../../../js/function/declaration/to/statement/arguments/assert/args/predicate.mjs';
import { arguments_assert_todo } from '../../../../../../../../arguments/assert/todo.mjs';
import { error } from '../../../../../../../../error.mjs';
import { arguments_assert } from '../../../../../../../../arguments/assert.mjs';
import { log } from '../../../../../../../../log.mjs';
export async function refactor_arguments_assert_call_expression_to_function_is_type(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {function_declaration} = args;
    let arguments_assert_args = await js_function_declaration_to_statement_arguments_assert_args_predicate(function_declaration);
    log(arguments_assert_args);
    error('todo: refactor_arguments_assert_call_expression_to_function_is_type');
}