import { js_statement_end } from '../../../../../../statement/end.mjs';
import { js_code_call_expression_with_args_code } from '../../../with/args/code.mjs';
export function js_code_call_expression_statement_with_args_code(name, call_args) {
    return `${ js_code_call_expression_with_args_code(name, call_args) }${ js_statement_end() }`;
}