import { js_function_declaration_to_statement_arguments_assert_args_predicate_added } from './predicate/added.mjs';
import { arguments_assert_todo } from '../../../../../../../../arguments/assert/todo.mjs';
import { metadata } from '../../../../../../../../metadata.mjs';
import { arguments_assert } from '../../../../../../../../arguments/assert.mjs';
export async function js_function_declaration_to_statement_arguments_assert_args_predicate(function_declaration) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {arguments_assert_args} = await js_function_declaration_to_statement_arguments_assert_args_predicate_added(function_declaration);
    return arguments_assert_args;
    metadata([]);
}