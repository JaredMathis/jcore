import { js_node_is_type } from '../type.mjs';
export function js_node_is_function_declaration(d) {
    return js_node_is_type(d, 'FunctionDeclaration');
}