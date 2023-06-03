import { js_mapper_args_to_statement_arguments_assert_args_predicate } from '../../../../../../js/mapper/args/to/statement/arguments/assert/args/predicate.mjs';
import { function_to_declaration } from '../../../../declaration.mjs';
export async function function_to_statement_arguments_assert_args_predicate(function_name) {
    let function_declaration = await function_to_declaration(function_name);
    let arguments_assert_args = await js_mapper_args_to_statement_arguments_assert_args_predicate(function_declaration);
    return arguments_assert_args;
}