import { js_code_await } from '../js/code/await.mjs';
import { js_code_call_expression_with_args } from '../js/code/call/expression/with/args.mjs';
import { js_parse_identifier } from '../js/parse/identifier.mjs';
import { js_code_return_statement } from '../js/code/return/statement.mjs';
import { js_function_declaration_async_is } from '../js/function/declaration/async/is.mjs';
import { js_function_declaration_to_params_names } from '../js/function/declaration/to/params/names.mjs';
import { function_add_with_statements_synchronized } from './add/with/statements/synchronized.mjs';
import { string_identifier_is } from '../string/identifier/is.mjs';
import { arguments_assert } from '../arguments/assert.mjs';
import { error } from '../error.mjs';
import { function_to_declaration } from './to/declaration.mjs';
import { list_add } from '../list/add.mjs';
import { list_map } from '../list/map.mjs';
export async function function_wrap(function_name_to_wrap, function_name_to_add) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    let function_declaration = await function_to_declaration(function_name_to_wrap);
    let identifier = 'result';
    let inputs = js_function_declaration_to_params_names(function_declaration);
    let is_async = js_function_declaration_async_is(function_declaration);
    let args = list_map(inputs, js_parse_identifier);
    let statement_first_code = js_code_call_expression_with_args(function_name_to_wrap, args);
    if (is_async) {
        statement_first_code = js_code_await(statement_first_code);
    }
    let statement_second_code = js_code_return_statement(js_parse_identifier(identifier));
    let statements = [];
    list_add(statements);
    error();
    function_add_with_statements_synchronized(function_name_to_add, statements, is_async);
}