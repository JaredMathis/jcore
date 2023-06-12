import { js_statement_end } from '../../statement/end.mjs';
import { js_keyword_return } from '../../keyword/return.mjs';
import { js_parse_statement } from '../../parse/statement.mjs';
export function js_code_return_statement(return_expression) {
    return js_parse_statement(`${ js_keyword_return() } ${ return_expression }${ js_statement_end() }`);
}