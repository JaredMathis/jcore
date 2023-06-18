import { noop } from '../noop.mjs';
import { function_input_add_type } from './input/add/type.mjs';
import { list_each_with_index_async } from '../list/each/with/index/async.mjs';
import { js_function_declaration_to_statement_arguments_assert_args_predicate } from '../js/function/declaration/to/statement/arguments/assert/args/predicate.mjs';
import { function_open_vs_code } from './open/vs/code.mjs';
import { js_code_statement_assignment } from '../js/code/statement/assignment.mjs';
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
import { list_get } from '../list/get.mjs';
import { js_identifier_name_get } from '../js/identifier/name/get.mjs';
export async function function_wrap(function_name_to_wrap, function_name_to_add) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_identifier_is
    ]);
    let map = noop;
    let function_declaration = await function_to_declaration(function_name_to_wrap);
    let arguments_assert_args = await js_function_declaration_to_statement_arguments_assert_args_predicate(function_declaration);
    let identifier = 'result';
    let inputs = js_function_declaration_to_params_names(function_declaration);
    let is_async = js_function_declaration_async_is(function_declaration);
    let statement_first_code = js_code_call_expression_with_args(function_name_to_wrap, inputs);
    if (is_async) {
        statement_first_code = js_code_await(statement_first_code);
    }
    statement_first_code = js_code_statement_assignment(identifier, statement_first_code);
    let statement_second_code = js_code_return_statement(identifier);
    let statements_code = [
        statement_first_code,
        statement_second_code
    ];
    let args = {
        identifier,
        statements_code
    };
    map(args);
    let statements = list_map(statements_code, js_parse_statement);
    await function_add_with_statements_synchronized(function_name_to_add, statements, is_async);
    await list_each_with_index_async(inputs, async (input, index) => {
        let arguments_assert_arg = list_get(arguments_assert_args, index);
        let arguments_assert_arg_name = js_identifier_name_get(arguments_assert_arg);
        await function_input_add_type(function_name_to_add, input, arguments_assert_arg_name);
    });
    await function_open_vs_code(function_name_to_add);
}