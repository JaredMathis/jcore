import { string_identifier_is } from '../../../../../../string/identifier/is.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { js_function_declaration_to_statement_arguments_assert_args_predicate } from '../../../../../../js/function/declaration/to/statement/arguments/assert/args/predicate.mjs';
import { function_to_declaration } from '../../../../declaration.mjs';
export async function function_to_statement_arguments_assert_args_predicate(function_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let function_declaration = await function_to_declaration(function_name);
    let arguments_assert_args = await js_function_declaration_to_statement_arguments_assert_args_predicate(function_declaration);
    return arguments_assert_args;
}