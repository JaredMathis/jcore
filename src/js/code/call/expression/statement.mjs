import { js_statement_end } from '../../../statement/end.mjs';
import { js_code_call_expression } from '../expression.mjs';
export function js_code_call_expression_statement(n) {
    return `${ js_code_call_expression(n) }${js_statement_end()}`;
}