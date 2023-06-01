import { js_parse_expression } from '../expression.mjs';
import { js_code_call_expression } from '../../code/call/expression.mjs';
export function js_parse_call_expression(name) {
    const code = js_code_call_expression(name);
    let expression = js_parse_expression(code);
    return expression;
}