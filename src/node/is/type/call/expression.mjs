import { metadata } from '../../../../metadata.mjs';
import { js_node_is_type } from '../../../../js/node/is/type.mjs';
export function node_is_type_call_expression(node) {
    return js_node_is_type(node, 'CallExpression');
    metadata([]);
}