import { string_a } from '../../string/a.mjs';
import { js_function_name_to_parsed } from '../function/name/to/parsed.mjs';
import { js_body_get } from '../body/get.mjs';
import { js_parse } from '../parse.mjs';
export function js_parse_statements(code) {
    let r = js_function_name_to_parsed(string_a());
    let parsed = js_parse(code);
    let body = js_body_get(parsed);
    return body;
}