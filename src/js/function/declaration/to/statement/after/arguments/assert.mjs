import { list_get } from '../../../../../../../list/get.mjs';
import { list_index_after } from '../../../../../../../list/index/after.mjs';
import { js_function_declaration_to_statements_and_arguments_assert_statement } from '../../../statements/and/arguments/assert/statement.mjs';
export async function js_function_declaration_to_statement_after_arguments_assert(function_declaration) {
    let {statements, statement_arguments_assert} = await js_function_declaration_to_statements_and_arguments_assert_statement(function_declaration);
    let index_after = list_index_after(statements, statement_arguments_assert);
    let statement_after = list_get(statements, index_after);
    return statement_after;
}