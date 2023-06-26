import { boolean_value_true } from '../../boolean/value/true.mjs';
import { string_is } from '../../string/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { metadata } from '../../metadata.mjs';
import { js_node_property_declaration } from '../node/property/declaration.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { js_code_export_function_synchronized } from '../code/export/function/synchronized.mjs';
import { js_export_single } from '../export/single.mjs';
import { string_a } from '../../string/a.mjs';
import { js_parse } from '../parse.mjs';
import { js_function_declaration_to_statements } from '../function/declaration/to/statements.mjs';
export function js_parse_statements(code) {
    arguments_assert(arguments, [string_is]);
    let is_async = boolean_value_true();
    let v = string_a();
    let unparsed = js_code_export_function_synchronized(v, is_async, code);
    let parsed = js_parse(unparsed);
    let export_single = js_export_single(parsed);
    let v_2 = js_node_property_declaration();
    let fd = object_property_get(export_single, v_2);
    let statements = js_function_declaration_to_statements(fd);
    return statements;
    metadata([]);
}