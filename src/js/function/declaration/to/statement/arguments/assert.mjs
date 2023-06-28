import { js_function_declaration_to_statement_arguments_assert_added } from './assert/added.mjs';
import { metadata } from '../../../../../../metadata.mjs';
import { arguments_assert } from '../../../../../../arguments/assert.mjs';
import { arguments_assert_todo } from '../../../../../../arguments/assert/todo.mjs';
export async function js_function_declaration_to_statement_arguments_assert(function_declaration) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {statement} = await js_function_declaration_to_statement_arguments_assert_added(function_declaration);
    return statement;
    metadata([]);
}