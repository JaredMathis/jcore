import { metadata } from '../../metadata.mjs';
import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { function_add_with_statement_code } from './with/statement/code.mjs';
import { js_code_return_statement } from '../../js/code/return/statement.mjs';
export async function function_add_return(function_name, return_expression_code) {
    arguments_assert(arguments, [
        arguments_assert_todo,
        arguments_assert_todo
    ]);
    let v = js_code_return_statement(return_expression_code);
    let v_2 = await function_add_with_statement_code(function_name, v);
    return v_2;
    metadata([]);
}