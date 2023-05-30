import { list_single } from '../../list/single.mjs';
import { js_body_get } from '../body/get.mjs';
import { js_parse } from '../parse.mjs';
export function js_parse_statement(statement_code) {
    let parsed = js_parse(statement_code);
    let body = js_body_get(parsed);
    let statement = list_single(body);
    return statement;
}