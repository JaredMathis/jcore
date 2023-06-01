import { tautology } from '../../../../tautology.mjs';
import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_statement_end } from '../../../statement/end.mjs';
import { js_code_call_expression } from '../expression.mjs';
export function js_code_call_expression_statement(callee) {
    arguments_assert(arguments, [tautology]);
    return `${ js_code_call_expression(callee) }${ js_statement_end() }`;
    metadata([]);
}