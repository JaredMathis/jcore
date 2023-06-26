import { metadata } from '../../../../../metadata.mjs';
import { js_node_is_function_declaration } from '../../../../node/is/function/declaration.mjs';
import { arguments_assert } from '../../../../../arguments/assert.mjs';
import { list_first } from '../../../../../list/first.mjs';
import { js_function_declaration_to_statements } from '../../../declaration/to/statements.mjs';
export function js_function_delcaration_to_statement_first(function_declaration) {
    arguments_assert(arguments, [js_node_is_function_declaration]);
    let statements = js_function_declaration_to_statements(function_declaration);
    let statement_first = list_first(statements);
    return statement_first;
    metadata([]);
}