import { js_export_single } from '../export/single.mjs';
import { string_a } from '../../string/a.mjs';
import { js_parse } from '../parse.mjs';
import { js_export_function } from '../export/function.mjs';
import { js_function_delcaration_to_statements } from '../function/delcaration/to/statements.mjs';
export function js_parse_statements(code) {
    let unparsed = js_export_function(string_a(), code);
    let parsed = js_parse(unparsed);
    let export_single = js_export_single(parsed);
    let statements = js_function_delcaration_to_statements(export_single);
    return statements;
}