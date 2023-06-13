import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { refactor_input_caller_generic } from './caller/generic.mjs';
import { function_name_get } from '../../function/name/get.mjs';
import { function_map_with_args } from '../../function/map/with/args.mjs';
import { function_callers } from '../../function/callers.mjs';
import { js_function_declaration_to_name } from '../../js/function/declaration/to/name.mjs';
import { refactor_import_fix } from '../import/fix.mjs';
import { js_function_declaration_to_statement_arguments_assert_args_predicate } from '../../js/function/declaration/to/statement/arguments/assert/args/predicate.mjs';
import { js_function_declaration_to_params } from '../../js/function/declaration/to/params.mjs';
export async function refactor_input_generic(args, function_declaration, args_additional_get, params_change, arguments_assert_args_change) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let params = js_function_declaration_to_params(function_declaration);
    params_change(params);
    let arguments_assert_args = await js_function_declaration_to_statement_arguments_assert_args_predicate(function_declaration);
    arguments_assert_args_change(arguments_assert_args);
    await refactor_import_fix(args);
    const args_additional = args_additional_get();
    let function_name = js_function_declaration_to_name(function_declaration);
    let callers = await function_callers(function_name);
    for (let caller of callers) {
        await function_map_with_args(function_name_get(refactor_input_caller_generic), caller, args_additional);
    }
}