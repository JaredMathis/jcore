import { js_code_expression_string } from '../../js/code/expression/string.mjs';
import { js_code_return_statement } from '../../js/code/return/statement.mjs';
import { function_add_with_statement_code } from './with/statement/code.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
import { string_is } from '../../string/is.mjs';
export async function function_add_string(function_name, string_value) {
    arguments_assert(arguments, [
        string_identifier_is,
        string_is
    ]);
    let expression = js_code_expression_string(string_value);
    return await function_add_with_statement_code(function_name, js_code_return_statement(expression));
}