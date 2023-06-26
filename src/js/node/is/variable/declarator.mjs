import { metadata } from '../../../../metadata.mjs';
import { js_node_is_type } from '../type.mjs';
export function js_node_is_variable_declarator(n) {
    let v_2 = 'VariableDeclarator';
    let v = js_node_is_type(n, v_2);
    return v;
    metadata([]);
}