import { js_node_is_type } from '../type.mjs';
export function js_node_is_block_statement(node) {
    return js_node_is_type(node, 'BlockStatement');
}