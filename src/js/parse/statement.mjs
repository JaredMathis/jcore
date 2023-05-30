import { js_parse_statements } from './statements.mjs';
import { list_single } from '../../list/single.mjs';
import { js_body_get } from '../body/get.mjs';
import { js_parse } from '../parse.mjs';
export function js_parse_statement(statement_code) {
    let parsed = js_parse(statement_code);
    let code = js_body_get(parsed);
    if (false) {
        let code = js_parse_statements(statement_code);
    }
    let statement = list_single(code);
    return statement;
}