import { js_node_is_type } from '../type.mjs';
export function js_node_is_import_declaration(node) {
    return js_node_is_type(node, 'ImportDeclaration');
}