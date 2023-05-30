import { error } from '../../error.mjs';
export function js_parse_statements(code) {
    let parsed = js_parse(code);
    let body = js_body_get(parsed);
    return body;
}