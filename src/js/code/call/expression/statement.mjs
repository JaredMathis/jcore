import { metadata } from '../../../../metadata.mjs';
import { js_statement_end } from '../../../statement/end.mjs';
import { js_code_call_expression } from '../expression.mjs';
export function js_code_call_expression_statement(callee) {
    return `${ js_code_call_expression(callee) }${ js_statement_end() }`;
    metadata([]);
}