import { array_single } from '../../array/single.mjs';
import { array_length_is_1 } from '../../array/length/is/1.mjs';
import { assert } from '../../assert.mjs';
import { js_body_get } from '../body/get.mjs';
import { js_parse } from '../parse.mjs';
export function js_parse_statement(statement_code) {
    let parsed = js_parse(statement_code);
    let body = js_body_get(parsed);
    let statement = array_single(body);
    return statement;
}