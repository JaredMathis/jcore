import { list_add_after } from '../../../../../../../list/add/after.mjs';
import { js_function_declaration_to_statements } from '../../../../to/statements.mjs';
import { js_function_declaration_to_statement_arguments_assert } from '../../../../to/statement/arguments/assert.mjs';
export async function js_function_declaration_statement_add_after_arguments_assert(function_declaration, statement) {
    let statement_arguments_assert = await js_function_declaration_to_statement_arguments_assert(function_declaration);
    let statements = js_function_declaration_to_statements(function_declaration);
    list_add_after(statements, statement, statement_arguments_assert);
}