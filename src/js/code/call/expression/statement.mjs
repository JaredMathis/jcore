import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_code_call_expression } from '../expression.mjs';
import { string_is } from '../../../../string/is.mjs';
import { js_code_statement } from '../../statement.mjs';
export function js_code_call_expression_statement(callee) {
    arguments_assert(arguments, [string_is]);
    return js_code_statement(js_code_call_expression(callee));
    metadata([]);
}