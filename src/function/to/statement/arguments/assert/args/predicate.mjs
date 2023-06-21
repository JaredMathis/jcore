import { js_identifier_is } from '../../../../../../js/identifier/is.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { js_function_declaration_to_statement_arguments_assert_args_predicate } from '../../../../../../js/function/declaration/to/statement/arguments/assert/args/predicate.mjs';
import { function_name_to_declaration } from '../../../../../name/to/declaration.mjs';
export async function function_to_statement_arguments_assert_args_predicate(function_name) {
    arguments_assert(arguments, [js_identifier_is]);
    let function_declaration = await function_name_to_declaration(function_name);
    let arguments_assert_args = await js_function_declaration_to_statement_arguments_assert_args_predicate(function_declaration);
    return arguments_assert_args;
}