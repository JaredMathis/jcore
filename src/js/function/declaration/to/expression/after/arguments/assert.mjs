import { metadata } from '../../../../../../../metadata.mjs';
import { js_statement_expression_to_expression } from '../../../../../../statement/expression/to/expression.mjs';
import { js_function_declaration_to_statement_after_arguments_assert } from '../../../statement/after/arguments/assert.mjs';
export async function js_function_declaration_to_expression_after_arguments_assert(function_declaration) {
    let statement_after = await js_function_declaration_to_statement_after_arguments_assert(function_declaration);
    let expression = js_statement_expression_to_expression(statement_after);
    return expression;
    metadata([]);
}