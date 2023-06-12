import { js_node_is_type } from '../type.mjs';
export function js_node_is_return_statment(node) {
    js_node_is_type(node, 'ReturnStatement');
}