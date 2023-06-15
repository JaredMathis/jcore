import { js_code_statement } from '../../js/code/statement.mjs';
import { function_add_with_statement } from './with/statement.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { error } from '../../error.mjs';
export async function function_add_mapper(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let expression = error();
    return await function_add_with_statement(function_name, js_code_statement(expression));
}