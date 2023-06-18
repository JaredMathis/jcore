import { js_code_statement } from '../../../../../statement.mjs';
import { arguments_assert } from '../../../../../../../arguments/assert.mjs';
import { js_code_call_expression_with_args_code } from '../../../with/args/code.mjs';
import { string_is } from '../../../../../../../string/is.mjs';
export function js_code_call_expression_statement_with_args_code(name, call_args) {
    arguments_assert(arguments, [
        string_is,
        string_is
    ]);
    let v = js_code_call_expression_with_args_code(name, call_args);
    let v_2 = js_code_statement(v);
    return v_2;
}