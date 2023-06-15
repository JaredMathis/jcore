import { js_statement_expression_to_expression } from '../../js/statement/expression/to/expression.mjs';
import { js_function_declaration_to_statements_and_arguments_assert_statement } from '../../js/function/declaration/to/statements/and/arguments/assert/statement.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { list_get } from '../../list/get.mjs';
import { list_index_after } from '../../list/index/after.mjs';
export async function refactor_call_name(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {name_new} = args;
    let {function_declaration} = args;
    let {statements, statement_arguments_assert} = await js_function_declaration_to_statements_and_arguments_assert_statement(function_declaration);
    let index_after = list_index_after(statements, statement_arguments_assert);
    let statement_after = list_get(index_after);
    let expression = js_statement_expression_to_expression(statement_after);
    js_call_expression_name_change(expression, name_new);
}