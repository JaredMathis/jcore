import { metadata } from '../../../../../../../metadata.mjs';
import { js_code_function_declaration_to_statement_assignment } from '../assignment.mjs';
import { js_function_declaration_to_params_names } from '../../../../../../function/declaration/to/params/names.mjs';
export function js_code_function_declaration_to_statement_assignment_wrapped(function_declaration, identifier) {
    let inputs = js_function_declaration_to_params_names(function_declaration);
    let statement_first_code = js_code_function_declaration_to_statement_assignment(function_declaration, inputs, identifier);
    return statement_first_code;
    metadata([]);
}