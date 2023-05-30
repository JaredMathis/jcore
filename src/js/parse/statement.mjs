import { js_parse_statements } from './statements.mjs';
import { list_single } from '../../list/single.mjs';
export function js_parse_statement(statement_code) {
    let code = js_parse_statements(statement_code);
    let statement = list_single(code);
    return statement;
}