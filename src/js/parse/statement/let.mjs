import { js_keyword_let } from '../../keyword/let.mjs';
import { js_parse_statement } from '../statement.mjs';
export function js_parse_statement_let(identifier, after_let_identifier) {
    return js_parse_statement(`${ js_keyword_let() } ${ identifier }${ after_let_identifier }`);
}