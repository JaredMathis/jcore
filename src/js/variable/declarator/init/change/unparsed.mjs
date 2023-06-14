import { js_variable_declarator_init_change } from '../change.mjs';
import { js_parse_expression } from '../../../../parse/expression.mjs';
export function js_variable_declarator_init_change_unparsed(value, declaration) {
    const value_parsed = js_parse_expression(value);
    js_variable_declarator_init_change(declaration, value_parsed);
}