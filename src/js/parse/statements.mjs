import { js_function_name_to_parsed } from '../function/name/to/parsed.mjs';
import { js_body_get } from '../body/get.mjs';
import { js_parse } from '../parse.mjs';
export function js_parse_statements(code) {
    if (false)
        js_function_name_to_parsed;
    let parsed = js_parse(code);
    let body = js_body_get(parsed);
    return body;
}