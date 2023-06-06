import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_statement_end } from '../../../statement/end.mjs';
import { js_code_call_expression } from '../expression.mjs';
import { js_node_is_call_expression } from '../../../node/is/call/expression.mjs';
export function js_code_call_expression_statement(callee) {
    arguments_assert(arguments, [js_node_is_call_expression]);
    return `${ js_code_call_expression(callee) }${ js_statement_end() }`;
    metadata([]);
}