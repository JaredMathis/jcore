import { list_first } from '../../../../../list/first.mjs';
import { js_function_delcaration_to_statements } from '../statements.mjs';
export function js_function_delcaration_to_statement_first(function_declaration) {
    let statements = js_function_delcaration_to_statements(function_declaration);
    let statement_first = list_first(statements);
    return statement_first;
}