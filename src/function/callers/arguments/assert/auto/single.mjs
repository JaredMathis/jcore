import { function_callers_arguments_assert_auto_generic } from './generic.mjs';
import { function_to_statement_arguments_assert_args_predicate } from '../../../../to/statement/arguments/assert/args/predicate.mjs';
export async function function_callers_arguments_assert_auto_single(function_name, c_function_name) {
    let arguments_assert_args = await function_to_statement_arguments_assert_args_predicate(function_name);
    await function_callers_arguments_assert_auto_generic(c_function_name, function_name, arguments_assert_args, result);
}