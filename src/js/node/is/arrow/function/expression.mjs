import { js_node_is_type } from '../../type.mjs';
export function js_node_is_arrow_function_expression(node) {
    return js_node_is_type(node, 'ArrowFunctionExpression');
}