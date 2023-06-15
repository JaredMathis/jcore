import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { error } from '../../error.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function refactor_call_name(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let statement_arguments_assert = await js_function_declaration_to_statement_arguments_assert(function_declaration);
}