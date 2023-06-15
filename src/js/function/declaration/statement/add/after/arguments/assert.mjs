import { js_function_declaration_to_statements_and_arguments_assert_statement } from '../../../../to/statements/and/arguments/assert/statement.mjs';
import { arguments_assert_todo } from '../../../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../../../arguments/assert.mjs';
import { list_add_after } from '../../../../../../../list/add/after.mjs';
export async function js_function_declaration_statement_add_after_arguments_assert(function_declaration, statement) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let {statements, statement_arguments_assert} = await js_function_declaration_to_statements_and_arguments_assert_statement(function_declaration);
    list_add_after(statements, statement, statement_arguments_assert);
}