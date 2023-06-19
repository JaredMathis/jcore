import { arguments_assert } from '../../arguments/assert.mjs';
import { js_node_is_identifier } from '../node/is/identifier.mjs';
import { assert } from '../../assert.mjs';
import { js_parse_expression } from './expression.mjs';
import { string_identifier_is } from '../../string/identifier/is.mjs';
export function js_parse_identifier(identifier_name) {
    arguments_assert(arguments, [string_identifier_is]);
    let identifier = js_parse_expression(identifier_name);
    let v = js_node_is_identifier(identifier);
    assert(v);
    return identifier;
}