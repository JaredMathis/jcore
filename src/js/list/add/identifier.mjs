import { assert } from '../../../assert.mjs';
import { list_add } from '../../../list/add.mjs';
import { js_node_is_identifier } from '../../node/is/identifier.mjs';
import { js_parse_expression } from '../../parse/expression.mjs';
export function js_list_add_identifier(list, identifier_name) {
    let identifier = js_parse_expression(identifier_name);
    assert(js_node_is_identifier(identifier))
    list_add(list, identifier);
}