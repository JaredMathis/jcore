import { js_statement_end } from './end.mjs';
import { js_keyword_let } from '../keyword/let.mjs';
export function js_statement_assignment(identifier, value) {
    let keyword_let = js_keyword_let();
    let statement = `${ keyword_let } ${ identifier } = ${ value }${ js_statement_end() }`;
    return statement;
}