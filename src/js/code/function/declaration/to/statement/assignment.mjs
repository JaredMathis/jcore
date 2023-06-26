import { metadata } from '../../../../../../metadata.mjs';
import { js_code_statement_assignment } from '../../../../statement/assignment.mjs';
import { js_code_await } from '../../../../await.mjs';
import { js_code_call_expression_with_args } from '../../../../call/expression/with/args.mjs';
import { js_function_declaration_async_is } from '../../../../../function/declaration/async/is.mjs';
import { js_function_declaration_to_name } from '../../../../../function/declaration/to/name.mjs';
export function js_code_function_declaration_to_statement_assignment(function_declaration, inputs, identifier_to_assign_to) {
    let function_name = js_function_declaration_to_name(function_declaration);
    let is_async = js_function_declaration_async_is(function_declaration);
    let statement_first_code = js_code_call_expression_with_args(function_name, inputs);
    if (is_async) {
        statement_first_code = js_code_await(statement_first_code);
    }
    statement_first_code = js_code_statement_assignment(identifier_to_assign_to, statement_first_code);
    return statement_first_code;
    metadata([]);
}