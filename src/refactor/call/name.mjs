import { js_function_declaration_to_statements_and_arguments_assert_statement } from '../../js/function/declaration/to/statements/and/arguments/assert/statement.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function refactor_call_name(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {function_declaration} = args;
    let {statements, statement_arguments_assert} = await js_function_declaration_to_statements_and_arguments_assert_statement(function_declaration);
    let index = list_index_of(statements, statement_arguments_assert);
    let index_after = 
    let statement_after = 
}