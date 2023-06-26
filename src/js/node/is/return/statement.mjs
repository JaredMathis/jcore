import { metadata } from '../../../../metadata.mjs';
import { js_node_is_type } from '../type.mjs';
export function js_node_is_return_statement(node) {
    let v_2 = 'ReturnStatement';
    let v = js_node_is_type(node, v_2);
    return v;
    metadata([]);
}