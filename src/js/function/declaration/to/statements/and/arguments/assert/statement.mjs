import { arguments_assert_todo } from '../../../../../../../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../../../../../../../arguments/assert.mjs';
import { metadata } from '../../../../../../../../metadata.mjs';
import { js_function_declaration_to_statements } from '../../../../statements.mjs';
import { js_function_declaration_to_statement_arguments_assert } from '../../../../statement/arguments/assert.mjs';
export async function js_function_declaration_to_statements_and_arguments_assert_statement(function_declaration) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let statement_arguments_assert = await js_function_declaration_to_statement_arguments_assert(function_declaration);
    let statements = js_function_declaration_to_statements(function_declaration);
    return {
        statements,
        statement_arguments_assert
    };
    metadata([]);
}