import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_code_call_expression } from '../expression.mjs';
import { string_is } from '../../../../string/is.mjs';
import { js_code_statement } from '../../statement.mjs';
export function js_code_call_expression_statement(name) {
    arguments_assert(arguments, [string_is]);
    let v = js_code_call_expression(name);
    let v_2 = js_code_statement(v);
    return v_2;
    metadata([]);
}