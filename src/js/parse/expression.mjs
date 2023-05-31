import { metadata } from '../../metadata.mjs';
import { object_property_get } from '../../object/property/get.mjs';
import { js_parse_statement } from './statement.mjs';
export function js_parse_expression(code) {
    let s = js_parse_statement(code);
    let expression = object_property_get(s, 'expression');
    return expression;
    metadata([]);
}