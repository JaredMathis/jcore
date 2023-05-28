import { js_node_is_type } from "./type.mjs";

export function js_node_is_identifier(node) {
    return js_node_is_type(node, 'Identifier')
}