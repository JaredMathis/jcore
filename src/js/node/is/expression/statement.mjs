import { arguments_assert } from '../../../../arguments/assert.mjs';
import { metadata } from '../../../../metadata.mjs';
import { js_node_is_type } from '../type.mjs';
import { js_node_is } from '../../is.mjs';
export function js_node_is_expression_statement(node) {
    arguments_assert(arguments, [js_node_is]);
    let v = js_node_is_type(node, 'ExpressionStatement');
    return v;
    metadata([]);
}