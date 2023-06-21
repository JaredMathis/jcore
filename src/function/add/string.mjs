import { js_code_expression_string } from '../../js/code/expression/string.mjs';
import { js_code_return_statement } from '../../js/code/return/statement.mjs';
import { function_add_with_statement_code } from './with/statement/code.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { js_identifier_is } from '../../js/identifier/is.mjs';
import { string_is } from '../../string/is.mjs';
export async function function_add_string(function_name, string_value) {
    arguments_assert(arguments, [
        js_identifier_is,
        string_is
    ]);
    let expression = js_code_expression_string(string_value);
    let v = js_code_return_statement(expression);
    let v_2 = await function_add_with_statement_code(function_name, v);
    return v_2;
}