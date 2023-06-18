import { string_is } from '../../string/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { js_node_property_expression } from '../node/property/expression.mjs';
import { metadata } from '../../metadata.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { js_parse_statement } from './statement.mjs';
import { js_node_is_function_declaration } from '../node/is/function/declaration.mjs';
export function js_parse_expression(code) {
    arguments_assert(arguments, [string_is]);
    let s = js_parse_statement(code);
    if (js_node_is_function_declaration(s)) {
        return s;
    }
    let v = js_node_property_expression();
    let expression = object_property_get(s, v);
    return expression;
    metadata([]);
}