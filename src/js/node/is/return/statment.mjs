import { js_node_is_type } from '../type.mjs';
export function js_node_is_return_statment(node) {
    return js_node_is_type(node, 'ReturnStatement');
}