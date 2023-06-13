import { js_list_add_identifier } from '../../js/list/add/identifier.mjs';
import { refactor_input_add_caller } from './add/caller.mjs';
import { function_map_with_args } from '../../function/map/with/args.mjs';
import { function_callers } from '../../function/callers.mjs';
import { js_function_declaration_to_name } from '../../js/function/declaration/to/name.mjs';
import { js_function_declaration_to_params } from '../../js/function/declaration/to/params.mjs';
import { js_parse_expression } from '../../js/parse/expression.mjs';
import { js_function_declaration_to_statement_arguments_assert_args_predicate } from '../../js/function/declaration/to/statement/arguments/assert/args/predicate.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { function_name_get } from '../../function/name/get.mjs';
import { list_add } from '../../list/add.mjs';
import { refactor_import_fix } from '../import/fix.mjs';
export async function refactor_input_add(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {input_name, function_declaration, input_value, input_type} = args;
    let input_value_expression = js_parse_expression(input_value);
    let params = js_function_declaration_to_params(function_declaration);
    js_list_add_identifier(params, input_name);
    let arguments_assert_args = await js_function_declaration_to_statement_arguments_assert_args_predicate(function_declaration);
    let type = js_parse_expression(function_name_get(input_type));
    list_add(arguments_assert_args, type);
    await refactor_import_fix(args);
    let function_name = js_function_declaration_to_name(function_declaration);
    let callers = await function_callers(function_name);
    for (let caller of callers) {
        await function_map_with_args(function_name_get(refactor_input_add_caller), caller, {
            input_value_expression,
            function_name_called: function_name
        });
    }
}