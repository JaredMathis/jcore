import { arguments_assert_todo } from '../../arguments/assert/todo.mjs';
import { arguments_assert } from '../../arguments/assert.mjs';
import { js_node_is_identifier } from '../node/is/identifier.mjs';
import { assert } from '../../assert.mjs';
import { js_parse_expression } from './expression.mjs';
export function js_parse_identifier(identifier_name) {
    arguments_assert(arguments, [arguments_assert_todo]);
    let identifier = js_parse_expression(identifier_name);
    let v = js_node_is_identifier(identifier);
    assert(v);
    return identifier;
}