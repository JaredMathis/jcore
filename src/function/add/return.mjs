import { function_add_with_statement_code } from './with/statement/code.mjs';
import { js_code_return_statement } from '../../js/code/return/statement.mjs';
export async function function_add_return(expression_code, function_name) {
    let v = js_code_return_statement(expression_code);
    let v_2 = await function_add_with_statement_code(function_name, v);
    return v_2;
}