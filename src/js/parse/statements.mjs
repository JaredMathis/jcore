import { js_export_single } from '../export/single.mjs';
import { string_a } from '../../string/a.mjs';
import { js_body_get } from '../body/get.mjs';
import { js_parse } from '../parse.mjs';
import { js_export_function } from '../export/function.mjs';
export function js_parse_statements(code) {
    let r = js_export_function(string_a(), code);
    let parsed = js_parse(code);
    if (false)
        js_export_single;
    let body = js_body_get(parsed);
    return body;
}