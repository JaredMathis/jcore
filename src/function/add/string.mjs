import { js_code_expression_string } from '../../js/code/expression/string.mjs';
import { js_code_return_statement } from '../../js/code/return/statement.mjs';
import { function_add_with_statement } from './with/statement.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
export async function function_add_string() {
    arguments_assert(arguments, []);
    let expression = js_code_expression_string();
    return await function_add_with_statement(function_name, js_code_return_statement(expression));
}