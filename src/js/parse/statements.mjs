import { log } from '../../log.mjs';
import { js_export_function_synchronized } from '../export/function/synchronized.mjs';
import { js_export_single } from '../export/single.mjs';
import { string_a } from '../../string/a.mjs';
import { js_parse } from '../parse.mjs';
import { js_function_delcaration_to_statements } from '../function/delcaration/to/statements.mjs';
import { json_to } from '../../json/to.mjs';
export function js_parse_statements(code) {
    let is_async = true;
    let unparsed = js_export_function_synchronized(string_a(), is_async, code);
    let parsed = js_parse(unparsed);
    let export_single = js_export_single(parsed);
    log(json_to(export_single));
    let statements = js_function_delcaration_to_statements(export_single);
    return statements;
}