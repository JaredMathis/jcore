import { string_is } from '../../string/is.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { js_node_property_expression } from '../node/property/expression.mjs';
import { metadata } from '../../metadata.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { js_parse_statement } from './statement.mjs';
export function js_parse_expression(code) {
    arguments_assert(arguments, [string_is]);
    let s = js_parse_statement(code);
    console.log({s})
    let expression = object_property_get(s, js_node_property_expression());
    return expression;
    metadata([]);
}