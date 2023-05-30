import { js_node_property_declaration } from '../node/property/declaration.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { js_export_function_synchronized } from '../export/function/synchronized.mjs';
import { js_export_single } from '../export/single.mjs';
import { string_a } from '../../string/a.mjs';
import { js_parse } from '../parse.mjs';
import { js_function_delcaration_to_statements } from '../function/delcaration/to/statements.mjs';
export function js_parse_statements(code) {
    let is_async = true;
    let unparsed = js_export_function_synchronized(string_a(), is_async, code);
    let parsed = js_parse(unparsed);
    let export_single = js_export_single(parsed);
    let fd = object_property_get(export_single, js_node_property_declaration());
    let statements = js_function_delcaration_to_statements(fd);
    return statements;
}