import { js_code_return_statement } from '../../js/code/return/statement.mjs';
import { function_add_with_statement } from './with/statement.mjs';
import { js_code_expression_string } from '../../js/code/expression/string.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_add_mapper(function_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let expression = js_code_expression_string(string_value);
    return await function_add_with_statement(function_name, js_code_return_statement(expression));
}