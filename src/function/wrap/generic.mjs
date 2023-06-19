import { function_dependencies_names_arguments_assert } from '../dependencies/names/arguments/assert.mjs';
import { js_code_function_declaration_to_statement_assignment_wrapped } from '../../js/code/function/declaration/to/statement/assignment/wrapped.mjs';
import { function_wrap_generic_identifier_result } from './generic/identifier/result.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { function_open_vs_code } from '../open/vs/code.mjs';
import { function_input_add_type } from '../input/add/type.mjs';
import { js_identifier_name_get } from '../../js/identifier/name/get.mjs';
import { list_get } from '../../list/get.mjs';
import { list_each_with_index_async } from '../../list/each/with/index/async.mjs';
import { function_add_with_statements_synchronized } from '../add/with/statements/synchronized.mjs';
import { js_parse_statement } from '../../js/parse/statement.mjs';
import { list_map } from '../../list/map.mjs';
import { js_code_return_statement } from '../../js/code/return/statement.mjs';
import { js_function_declaration_async_is } from '../../js/function/declaration/async/is.mjs';
import { js_function_declaration_to_params_names } from '../../js/function/declaration/to/params/names.mjs';
import { js_function_declaration_to_statement_arguments_assert_args_predicate } from '../../js/function/declaration/to/statement/arguments/assert/args/predicate.mjs';
import { function_to_declaration } from '../to/declaration.mjs';
import { list_contains } from '../../list/contains.mjs';
export async function function_wrap_generic(function_name_to_wrap, function_name_to_add, map) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let function_declaration = await function_to_declaration(function_name_to_wrap);
    let dependencies = await function_dependencies_names_arguments_assert();
    let dependency_is = list_contains(dependencies, function_name_to_wrap)
    let arguments_assert_args;
    if (!dependency_is) {
        arguments_assert_args = await js_function_declaration_to_statement_arguments_assert_args_predicate(function_declaration);
    }
    let identifier = function_wrap_generic_identifier_result();
    let statements_code = [
        js_code_function_declaration_to_statement_assignment_wrapped(function_declaration, identifier),
        js_code_return_statement(identifier)
    ];
    let args = {
        statements_code,
        function_declaration
    };
    map(args);
    let statements = list_map(statements_code, js_parse_statement);
    let is_async = js_function_declaration_async_is(function_declaration);
    await function_add_with_statements_synchronized(function_name_to_add, statements, is_async);
    let inputs = js_function_declaration_to_params_names(function_declaration);
    await list_each_with_index_async(inputs, async function v(input, index) {
        let input_type;
        if (dependency_is) {

        }
        let arguments_assert_arg = list_get(arguments_assert_args, index);
        let arguments_assert_arg_name = js_identifier_name_get(arguments_assert_arg);
        await function_input_add_type(function_name_to_add, input, arguments_assert_arg_name);
    });
    await function_open_vs_code(function_name_to_add);
}