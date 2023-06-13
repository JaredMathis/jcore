import { function_open_vs_code } from './open/vs/code.mjs';
import { js_statement_assignment } from '../js/statement/assignment.mjs';
import { js_code_await } from '../js/code/await.mjs';
import { js_code_call_expression_with_args } from '../js/code/call/expression/with/args.mjs';
import { js_code_return_statement } from '../js/code/return/statement.mjs';
import { js_function_declaration_async_is } from '../js/function/declaration/async/is.mjs';
import { js_function_declaration_to_params_names } from '../js/function/declaration/to/params/names.mjs';
import { function_add_with_statements_synchronized } from './add/with/statements/synchronized.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { function_to_declaration } from './to/declaration.mjs';
import { list_map } from '../list/map.mjs';
import { js_parse_statement } from '../js/parse/statement.mjs';
export async function function_wrap(function_name_to_wrap, function_name_to_add) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    let function_declaration = await function_to_declaration(function_name_to_wrap);
    let identifier = 'result';
    let inputs = js_function_declaration_to_params_names(function_declaration);
    let is_async = js_function_declaration_async_is(function_declaration);
    let statement_first_code = js_code_call_expression_with_args(function_name_to_wrap, inputs);
    if (is_async) {
        statement_first_code = js_code_await(statement_first_code);
    }
    statement_first_code = js_statement_assignment(identifier, statement_first_code);
    let statement_second_code = js_code_return_statement(identifier);
    let statements_code = [
        statement_first_code,
        statement_second_code
    ];
    let statements = list_map(statements_code, js_parse_statement);
    await function_add_with_statements_synchronized(function_name_to_add, statements, is_async);
    for (let input of inputs) {
        await function_add_input(function_name_to_add, input);
    }
    await function_open_vs_code(function_name_to_add);
}