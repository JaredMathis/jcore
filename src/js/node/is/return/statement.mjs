import { js_node_is_type } from '../type.mjs';
export function js_node_is_return_statement(node) {
    let v = js_node_is_type(node, 'ReturnStatement');
    return v;
}