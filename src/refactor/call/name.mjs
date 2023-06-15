import { js_function_declaration_to_statement_arguments_assert } from '../../js/function/declaration/to/statement/arguments/assert.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function refactor_call_name(args) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let {function_declaration} = args;
    let statement_arguments_assert = await js_function_declaration_to_statement_arguments_assert(function_declaration);
}