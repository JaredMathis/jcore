import { metadata } from '../../../metadata.mjs';
import { arguments_assert } from '../../../arguments/assert.mjs';
import { js_parse_expression } from '../expression.mjs';
import { js_code_call_expression } from '../../code/call/expression.mjs';
import { js_identifier_is } from '../../identifier/is.mjs';
export function js_parse_call_expression(name) {
    arguments_assert(arguments, [js_identifier_is]);
    const code = js_code_call_expression(name);
    let expression = js_parse_expression(code);
    return expression;
    metadata([]);
}