import { metadata } from '../../../../metadata.mjs';
import { js_node_is_type } from '../type.mjs';
export function js_node_is_expression_statement(node) {
    return js_node_is_type(node, 'ExpressionStatement');
    metadata([]);
}