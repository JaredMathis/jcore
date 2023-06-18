import { js_node_is_type } from '../type.mjs';
export function js_node_is_variable_declarator(n) {
    let v = js_node_is_type(n, 'VariableDeclarator');
    return v;
}