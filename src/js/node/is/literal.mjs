import { js_node_is_type } from "./type.mjs";

export function js_node_is_literal(source) {
    return js_node_is_type(source, 'Literal');
}