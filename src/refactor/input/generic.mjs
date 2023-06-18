import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { refactor_input_caller_generic } from './caller/generic.mjs';
import { function_name_get } from '../../function/name/get.mjs';
import { function_map_with_args } from '../../function/map/with/args.mjs';
import { js_function_declaration_to_name } from '../../js/function/declaration/to/name.mjs';
import { refactor_import_fix } from '../import/fix.mjs';
import { js_function_declaration_to_statement_arguments_assert_args_predicate } from '../../js/function/declaration/to/statement/arguments/assert/args/predicate.mjs';
import { js_function_declaration_to_params } from '../../js/function/declaration/to/params.mjs';
import { object_merge } from '../../object/merge.mjs';
import { function_callers_names } from '../../function/callers/names.mjs';
export async function refactor_input_generic(args, function_declaration, args_additional_get, params_change, arguments_assert_args_change) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let arguments_assert_args = await js_function_declaration_to_statement_arguments_assert_args_predicate(function_declaration);
    let params = js_function_declaration_to_params(function_declaration);
    params_change(params);
    arguments_assert_args_change(arguments_assert_args);
    await refactor_import_fix(args);
    const args_additional = args_additional_get();
    let function_name = js_function_declaration_to_name(function_declaration);
    const args_additional_merge = { function_name_called: function_name };
    object_merge(args_additional, args_additional_merge);
    let callers = await function_callers_names(function_name);
    for (let caller of callers) {
        let v = function_name_get(refactor_input_caller_generic);
        await function_map_with_args(v, caller, args_additional_merge);
    }
}